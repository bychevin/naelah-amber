<?php
// api.php - Registrar IP de cada visitante automáticamente

header('Content-Type: application/json');

// Obtener IP del cliente
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';

// Verificar si es una petición válida (no desde localhost)
if ($ip === '127.0.0.1' || $ip === '::1') {
  echo json_encode(['status' => 'error', 'message' => 'Solo acepta IPs reales']);
  exit;
}

// Obtener ubicación con ipapi.is
$url = "https://api.ipapi.is/?q={$ip}";
$response = file_get_contents($url);
$data = json_decode($response, true);

if ($data && isset($data['location'])) {
  $location = $data['location'];
  
  // Crear registro de visita
  $timestamp = date('Y-m-d H:i:s');
  $record = [
    'ip' => $ip,
    'city' => $location['city'],
    'region' => $location['region'],
    'country' => $location['country_name'],
    'latitude' => $location['latitude'],
    'longitude' => $location['longitude'],
    'timestamp' => $timestamp,
    'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'unknown',
    'referer' => $_SERVER['HTTP_REFERER'] ?? 'direct'
  ];

  // Guardar en archivo JSON (más fácil de leer que texto)
  $file = 'visits.json';
  
  // Leer visitas existentes
  $existingVisits = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
  
  // Agregar nueva visita
  $existingVisits[] = $record;
  
  // Guardar en archivo (máximo 10,000 visitas)
  $maxVisits = 10000;
  if (count($existingVisits) >= $maxVisits) {
    array_shift($existingVisits); // Eliminar la más antigua
  }
  
  file_put_contents($file, json_encode($existingVisits, JSON_PRETTY_PRINT));
  
  echo json_encode([
    'status' => 'success',
    'message' => 'Visita registrada correctamente',
    'data' => $record
  ]);
} else {
  // Si ipapi.is falla, guardar solo la IP básica
  $timestamp = date('Y-m-d H:i:s');
  $record = [
    'ip' => $ip,
    'city' => 'N/A',
    'region' => 'N/A',
    'country' => 'N/A',
    'latitude' => null,
    'longitude' => null,
    'timestamp' => $timestamp,
    'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'unknown',
    'referer' => $_SERVER['HTTP_REFERER'] ?? 'direct'
  ];

  // Guardar en archivo JSON
  $file = 'visits.json';
  
  // Leer visitas existentes
  $existingVisits = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
  
  // Agregar nueva visita
  $existingVisits[] = $record;
  
  // Guardar en archivo (máximo 10,000 visitas)
  $maxVisits = 10000;
  if (count($existingVisits) >= $maxVisits) {
    array_shift($existingVisits);
  }
  
  file_put_contents($file, json_encode($existingVisits, JSON_PRETTY_PRINT));
  
  echo json_encode([
    'status' => 'success',
    'message' => 'Visita registrada (sin geolocalización)',
    'data' => $record
  ]);
}
