<?php
// dashboard.php - Ver todas las visitas registradas en el servidor

header('Content-Type: text/html; charset=utf-8');

// Leer visitas del archivo JSON
$visits = [];
if (file_exists('visits.json')) {
  $visits = json_decode(file_get_contents('visits.json'), true);
} else {
  echo '<h1>📊 Todas las Visitas Registradas</h1>';
  echo '<p style="color: #666;">No hay visitas registradas aún.</p>';
  exit;
}

// Contar estadísticas
$totalVisits = count($visits);
$countries = [];
$uniqueIPs = [];

foreach ($visits as $visit) {
  if (!empty($visit['country'])) {
    $countries[] = $visit['country'];
  }
  if (!empty($visit['ip'])) {
    $uniqueIPs[] = $visit['ip'];
  }
}

// Ordenar por fecha (más reciente primero)
usort($visits, function($a, $b) {
  return strtotime($b['timestamp']) - strtotime($a['timestamp']);
});

// Renderizar HTML
echo '<!DOCTYPE html>
<html>
<head>
  <title>Todas las Visitas Registradas</title>
  <style>
    body { font-family: Arial; padding: 20px; background: #f5f5f5; }
    h1 { color: #333; margin-bottom: 20px; }
    
    .stats-box { 
      background: white; 
      padding: 15px; 
      border-radius: 8px; 
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      margin-bottom: 20px;
    }
    
    .visits-table { 
      width: 100%; 
      background: white; 
      border-radius: 8px; 
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    
    .visits-table th { 
      background: #3498db; 
      color: white; 
      padding: 12px; 
      text-align: left; 
    }
    
    .visits-table td { 
      padding: 10px 12px; 
      border-bottom: 1px solid #eee;
    }
    
    .visits-table tr:hover { background: #f9f9f9; }
    
    .clear-btn {
      background: #e74c3c;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 20px;
    }
    
    .clear-btn:hover { background: #c0392b; }
  </style>
</head>
<body>';

echo '<h1>📊 Todas las Visitas Registradas (IP Tracker)</h1>';

// Estadísticas
echo '<div class="stats-box">';
echo '<h2>📈 Estadísticas</h2>';
echo "<p><strong>Total de visitas:</strong> {$totalVisits}</p>";
echo "<p><strong>Países únicos:</strong> " . count($countries) . "</p>";
echo "<p><strong>IPs únicas:</strong> " . count(array_unique($uniqueIPs)) . "</p>";
echo '</div>';

// Tabla de Visitas
if (count($visits) > 0) {
  echo '<table class="visits-table">';
  echo '<thead><tr>';
  
  $headers = ['#', 'Fecha/Hora', 'IP', 'Ciudad', 'País', 'Lat/Lon'];
  foreach ($headers as $header) {
    echo "<th>{$header}</th>";
  }
  
  echo '</tr></thead><tbody>';

  foreach ($visits as $index => $visit) {
    $date = !empty($visit['timestamp']) ? date('d/m/Y H:i:s', strtotime($visit['timestamp'])) : 'N/A';
    
    echo '<tr>';
    echo "<td>{$index + 1}</td>";
    echo "<td>{$date}</td>";
    echo "<td><strong>" . htmlspecialchars($visit['ip'] ?? 'N/A') . "</strong></td>";
    echo "<td>" . htmlspecialchars($visit['city'] ?? 'N/A') . "</td>";
    echo "<td>" . htmlspecialchars($visit['country'] ?? 'N/A') . "</td>";
    echo "<td>" . ($visit['latitude'] ? sprintf("%.6f, %.6f", $visit['latitude'], $visit['longitude']) : 'N/A') . "</td>";
    echo '</tr>';
  }

  echo '</tbody></table>';
} else {
  echo '<p style="color: #666;">No hay visitas registradas aún.</p>';
}

// Botón borrar
echo '<button class="clear-btn" onclick="if(confirm(\'¿Borrar todas las visitas?\')){location.reload();}">🗑️ Borrar Todas las Visitas</button>';

echo '</body></html>';
