import test from 'node:test';
import assert from 'node:assert/strict';
import { FLEET_SERVICES, INCIDENT_LOG, calculateGlobalSLA } from '../js/servicesData.js';

test('1. Catálogo de Servicios: Debe contener exactamente 10 aplicaciones de la flota', () => {
  assert.equal(Array.isArray(FLEET_SERVICES), true);
  assert.equal(FLEET_SERVICES.length, 10, 'Deben existir exactamente 10 servicios en la flota');
});

test('2. Protocolo de Red Seguro: Todos los servicios deben utilizar URLs con HTTPS', () => {
  FLEET_SERVICES.forEach(s => {
    assert.ok(s.url.startsWith('https://'), `El servicio ${s.id} debe operar exclusivamente sobre HTTPS`);
    assert.ok(s.host && s.host.length > 0, `El servicio ${s.id} debe declarar su proveedor de host`);
    assert.ok(s.expectedLatencyMs > 0 && s.expectedLatencyMs < 100, `Latencia esperada de ${s.id} en rango saludable`);
  });
});

test('3. Regla SSOT Inmutable: CAMBIOYA! es 100% trueque comunitario y JAMÁS fintech', () => {
  const cambioya = FLEET_SERVICES.find(s => s.id === 'cambioya');
  assert.ok(cambioya, 'CAMBIOYA! debe existir en la flota');
  assert.match(cambioya.category, /Trueque|Circular/i, 'Categoría debe ser trueque comunitario');
  assert.doesNotMatch(cambioya.category, /fintech|forex|banca|divisas/i, 'JAMÁS catalogar CambioYa como fintech');
});

test('4. Regla SSOT Inmutable: HiDoctor es exclusivamente pediátrico', () => {
  const hidoctor = FLEET_SERVICES.find(s => s.id === 'hidoctor');
  assert.ok(hidoctor, 'HiDoctor debe existir en la flota');
  assert.match(hidoctor.category, /Pediátric/i, 'HiDoctor debe ser pediátrico');
  assert.doesNotMatch(hidoctor.category, /adultos|general/i, 'HiDoctor no es medicina general de adultos');
});

test('5. Regla SSOT Inmutable: VitroDiag es manufactura de vidrio en máquinas I.S.', () => {
  const vitrodiag = FLEET_SERVICES.find(s => s.id === 'vitrodiag');
  assert.ok(vitrodiag, 'VitroDiag debe existir');
  assert.match(vitrodiag.category, /Vidrio|Manufactura/i, 'VitroDiag es manufactura industrial de vidrio');
  assert.doesNotMatch(vitrodiag.category, /clínic|médic|laboratorio de salud/i, 'JAMÁS confundir con diagnóstico clínico');
});

test('6. Regla SSOT Inmutable: Faro es seguridad física personal y alerta SOS', () => {
  const faro = FLEET_SERVICES.find(s => s.id === 'faro');
  assert.ok(faro, 'Faro debe existir');
  assert.match(faro.category, /Seguridad|SOS/i, 'Faro es seguridad personal y alerta SOS');
});

test('7. Motor de SLA Global: Debe retornar promedio determinístico >= 99.90%', () => {
  const globalSla = calculateGlobalSLA(FLEET_SERVICES);
  assert.equal(typeof globalSla, 'number');
  assert.equal(isNaN(globalSla), false, 'El SLA global no debe ser NaN');
  assert.ok(globalSla >= 99.90 && globalSla <= 100.0, `SLA global (${globalSla}%) debe ser de grado aeroespacial >= 99.90%`);
});

test('8. Registro de Incidentes: Debe documentar resolución transparente con MTTR < 20 min', () => {
  assert.equal(Array.isArray(INCIDENT_LOG), true);
  assert.ok(INCIDENT_LOG.length >= 3, 'Deben existir al menos 3 incidentes resueltos documentados');

  let totalMinutes = 0;
  INCIDENT_LOG.forEach(inc => {
    assert.ok(inc.id.startsWith('INC-'));
    assert.equal(inc.status, 'Resuelto');
    assert.ok(inc.durationMinutes > 0);
    totalMinutes += inc.durationMinutes;
  });

  const mttr = totalMinutes / INCIDENT_LOG.length;
  assert.ok(mttr < 20, `El MTTR medio de resolución (${mttr} min) debe ser inferior a 20 minutos`);
});

test('9. Niveles de Nivel Institucional: Los tres activos soberanos deben figurar en Tier 1', () => {
  const tier1Keys = ['cambioya', 'ataraxia', 'hidoctor', 'faro'];
  tier1Keys.forEach(k => {
    const s = FLEET_SERVICES.find(item => item.id === k);
    assert.ok(s, `Servicio ${k} debe existir`);
    assert.match(s.tier, /Tier 1/i, `Servicio ${k} debe ser calificado como Tier 1 Sovereign`);
  });
});

test('10. Auditoría Zero-Leakage: Ningún registro de servicio expone llaves secretas ni credenciales', () => {
  const jsonStr = JSON.stringify(FLEET_SERVICES) + JSON.stringify(INCIDENT_LOG);
  assert.doesNotMatch(jsonStr, /sk_live_[0-9a-zA-Z]+/);
  assert.doesNotMatch(jsonStr, /ghp_[0-9a-zA-Z]+/);
  assert.doesNotMatch(jsonStr, /AIza[0-9A-Za-z-_]+/);
});

test('11. Telemetría RUM & Pipeline CI: Baliza RUM y plantilla de verificación CI deben existir y estar sellados', async () => {
  const fs = await import('node:fs');
  assert.equal(fs.existsSync('./js/rumBeacon.js'), true, 'La baliza RUM debe estar presente');
  const ciExists = fs.existsSync('./ci/verify.yml') || fs.existsSync('./.github/workflows/verify.yml');
  assert.equal(ciExists, true, 'El workflow de verificación de CI debe existir');
  
  const rumCode = fs.readFileSync('./js/rumBeacon.js', 'utf8');
  assert.match(rumCode, /window\.__VGUARD_RUM__/);
  assert.match(rumCode, /uncaught_exception/);
  assert.match(rumCode, /unhandled_rejection/);
});

test('12. HUD de Telemetría RUM en Vivo: Debe contener los 4 indicadores clave en el DOM', async () => {
  const fs = await import('node:fs');
  const html = fs.readFileSync('./index.html', 'utf8');
  assert.match(html, /id="rum-ttfb"/, 'Debe incluir indicador TTFB');
  assert.match(html, /id="rum-dom"/, 'Debe incluir indicador DOM Ready');
  assert.match(html, /id="rum-load"/, 'Debe incluir indicador Page Load');
  assert.match(html, /id="rum-health"/, 'Debe incluir indicador de salud');
  assert.match(html, /rumBeacon\.js/, 'Debe enlazar la baliza RUM');
});
