import { expect, test } from "@playwright/test";

/**
 * Único teste e2e do projeto por decisão de arquitetura (ver
 * documentacao/arquitetura.md) — o formulário de orçamento é a única
 * função de receita do site. A resposta do /api/orcamento é mockada:
 * este teste valida o fluxo da interface (navegação entre etapas,
 * validação, envio), não a entrega real de e-mail/canal secundário.
 */
test("preenche e envia o formulário de orçamento de ponta a ponta", async ({
  page,
}) => {
  await page.route("/api/orcamento", async (route) => {
    await route.fulfill({ status: 200, json: { ok: true } });
  });

  await page.goto("/orcamento");

  // Etapa 1
  await page.getByRole("radio", { name: "Site" }).click();
  await page.getByRole("button", { name: "Próximo" }).click();

  // Etapa 2
  await page.getByLabel("Nome da empresa").fill("Padaria Modelo");
  await page.getByLabel("Segmento do negócio").fill("Alimentação");
  await page.getByRole("button", { name: "Próximo" }).click();

  // Etapa 3
  await page.getByRole("radio", { name: "Nada ainda" }).click();
  await page.getByRole("button", { name: "Próximo" }).click();

  // Etapa 4
  await page.getByRole("radio", { name: "1 a 3 meses" }).click();
  await page.getByRole("button", { name: "Próximo" }).click();

  // Etapa 5
  await page.getByLabel("Nome").fill("Maria Teste");
  await page.getByLabel("E-mail").fill("maria@example.com");
  await page.getByLabel("WhatsApp").fill("11999999999");
  await page.getByRole("button", { name: "Enviar" }).click();

  await expect(page.getByText("Recebemos seu pedido")).toBeVisible();
});

test("bloqueia avanço sem selecionar o tipo de necessidade", async ({
  page,
}) => {
  await page.goto("/orcamento");
  await page.getByRole("button", { name: "Próximo" }).click();
  await expect(page.getByText("Selecione uma opção")).toBeVisible();
});
