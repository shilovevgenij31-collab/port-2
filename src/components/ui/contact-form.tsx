"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { projectTypes } from "@/data/site";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      contact: String(formData.get("contact") || ""),
      projectType: String(formData.get("projectType") || ""),
      description: String(formData.get("description") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setState("error");
        setMessage(data.message || "Не удалось отправить сообщение.");
        return;
      }

      setState("success");
      setMessage(data.message || "Сообщение отправлено.");
      form.reset();
    } catch {
      setState("error");
      setMessage("Во время отправки произошла ошибка. Попробуйте ещё раз.");
    }
  }

  return (
    <form className="contact-form-card" onSubmit={handleSubmit}>
      <div className="grid gap-3.5 sm:grid-cols-2">
        <label>
          <span className="form-label">Имя</span>
          <input className="form-control" name="name" placeholder="Как к вам обращаться" required />
        </label>

        <label>
          <span className="form-label">Контакт</span>
          <input className="form-control" name="contact" placeholder="Telegram, email или телефон" required />
        </label>
      </div>

      <label>
        <span className="form-label">Тип проекта</span>
        <select className="form-control" name="projectType" required defaultValue="">
          <option value="" disabled>
            Выберите формат
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span className="form-label">Описание</span>
        <textarea
          className="form-control min-h-[160px] resize-y"
          name="description"
          placeholder="Коротко опишите задачу, сроки и желаемый результат"
          required
        />
      </label>

      <div className="flex flex-col gap-3.5 pt-2">
        <button
          className="btn btn-primary w-full sm:w-fit"
          disabled={state === "submitting"}
          type="submit"
        >
          {state === "submitting" ? "Отправляю сообщение..." : "Отправить запрос"}
        </button>

        <p
          className="form-helper"
          style={{
            color:
              state === "error"
                ? "#f87171"
                : state === "success"
                  ? "var(--color-accent-green)"
                  : undefined,
          }}
        >
          {message || "Форма отправляет заявку на email. Если нужен самый быстрый ответ, лучше написать в Telegram."}
        </p>
      </div>
    </form>
  );
}
