/**
 * Cole este código no Apps Script vinculado à planilha de backup dos
 * leads do formulário de orçamento (ver documentacao/configuracao-integracoes.md
 * para o passo a passo de deploy). Não faz parte do build do Next.js —
 * roda inteiramente do lado do Google.
 */
function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  sheet.appendRow([
    data.recebidoEm || new Date().toISOString(),
    data.tipoNecessidade || "",
    data.nomeEmpresa || "",
    data.segmento || "",
    data.oQueJaExiste || "",
    data.detalheEscopo || "",
    data.faixaInvestimento || "",
    data.urgencia || "",
    data.nome || "",
    data.email || "",
    data.whatsapp || "",
    data.melhorHorario || "",
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true }),
  ).setMimeType(ContentService.MimeType.JSON);
}
