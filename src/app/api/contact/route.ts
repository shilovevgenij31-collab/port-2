import { NextResponse } from "next/server";
import { projectTypes } from "@/data/site";

type ContactFormValues = {
  name: string;
  contact: string;
  projectType: string;
  description: string;
};

function validatePayload(payload: ContactFormValues) {
  const name = payload.name?.trim() ?? "";
  const contact = payload.contact?.trim() ?? "";
  const projectType = payload.projectType?.trim() ?? "";
  const description = payload.description?.trim() ?? "";

  if (!name || !contact || !projectType || !description) {
    return "Заполните все поля формы.";
  }

  if (name.length < 2) {
    return "Укажите имя длиннее двух символов.";
  }

  if (contact.length < 4) {
    return "Укажите корректный способ связи.";
  }

  if (!projectTypes.includes(projectType as (typeof projectTypes)[number])) {
    return "Выберите тип проекта из списка.";
  }

  if (description.length < 12) {
    return "Опишите задачу чуть подробнее.";
  }

  return null;
}

export async function POST(request: Request) {
  let payload: ContactFormValues;

  try {
    payload = (await request.json()) as ContactFormValues;
  } catch {
    return NextResponse.json({ message: "Некорректный формат запроса." }, { status: 400 });
  }

  const validationError = validatePayload(payload);

  if (validationError) {
    return NextResponse.json({ message: validationError }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL || "Shilovevgenij31@gmail.com";

  if (!resendApiKey || !fromEmail) {
    return NextResponse.json(
      {
        message:
          "Форма настроена не до конца. Добавьте RESEND_API_KEY и CONTACT_FROM_EMAIL в переменные окружения.",
      },
      { status: 500 },
    );
  }

  const emailBody = [
    `Имя: ${payload.name.trim()}`,
    `Контакт: ${payload.contact.trim()}`,
    `Тип проекта: ${payload.projectType.trim()}`,
    "",
    "Описание:",
    payload.description.trim(),
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `Новая заявка с сайта — ${payload.projectType.trim()}`,
        text: emailBody,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          message: "Не удалось отправить заявку. Попробуйте ещё раз или напишите напрямую в Telegram.",
        },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json(
      {
        message: "Не удалось отправить заявку. Попробуйте ещё раз или напишите напрямую в Telegram.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Запрос отправлен. Для самого быстрого ответа можно написать и в Telegram.",
  });
}
