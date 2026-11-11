import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("App", () => {
  it("renders the home page and primary navigation", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(screen.getByRole("heading", { name: /full-stack developer/i })).toBeVisible();
    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
      "href",
      "/projects",
    );
  });

  it("exposes verified contact and profile links", () => {
    render(
      <MemoryRouter initialEntries={["/contact"]}>
        <App />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("link", { name: /adeyinkafoladev@gmail.com/i }),
    ).toHaveAttribute(
      "href",
      "mailto:adeyinkafoladev@gmail.com?subject=Portfolio%20inquiry",
    );
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/adepoju-adeyinka-folashade-a7b3a42a9/",
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/ADEYINKE-30",
    );
  });

  it("opens the real CV for viewing", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByRole("link", { name: /view cv/i })).toHaveAttribute(
      "href",
      "/Adepoju_Adeyinka_Folashade_CV.pdf",
    );
    expect(screen.getByRole("link", { name: /view cv/i })).toHaveAttribute(
      "target",
      "_blank",
    );
  });

  it("renders Adeyinka's profile portrait in the Home hero", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("img", { name: "Portrait of Adepoju Adeyinka" }),
    ).toHaveAttribute("src", "/adepoju-adeyinka-profile.png");
  });

  it("renders Adeyinka's profile portrait on the About page", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <App />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("img", { name: "Portrait of Adepoju Adeyinka" }),
    ).toHaveAttribute("src", "/adepoju-adeyinka-profile.png");
    expect(screen.getByText("classroom teacher")).toBeVisible();
    expect(screen.getByText("private tutor")).toBeVisible();
    expect(screen.getByText("full-stack developer")).toBeVisible();
    expect(screen.getByText("Education")).toBeVisible();
    expect(
      screen.getByRole("heading", {
        name: "Software Development Bootcamp with AI Skills",
      }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", {
        name: "Diploma of Education: Communication and Behaviour Disorders / English",
      }),
    ).toBeVisible();
  });

  it("renders project preview images", () => {
    render(
      <MemoryRouter initialEntries={["/projects"]}>
        <App />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("img", { name: "DEVNOTES learning platform dashboard" }),
    ).toHaveAttribute("src", "/devnotes-preview.png");
    expect(
      screen.getByRole("img", { name: "HER GROWTH DIARY homepage" }),
    ).toHaveAttribute("src", "/her-growth-diary-preview.png");
  });
});
