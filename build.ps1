$files = @('index.html', 'kehidupan-kampus.html', 'pmb.html', 'portofolio.html', 'profil.html')
$urls = @(
    "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzg1MjZhZTY0MGMyZDQ3YTJiMThlODQyYmIwYTA5ZTA3EgsSBxDp04LGswQYAZIBIwoKcHJvamVjdF9pZBIVQhMxNjc4OTU0NDk1OTE4ODMwMjEy&filename=&opi=89354086",
    "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzkwYWExM2E1YWJhMTRjYmI5ZjU1OGQwODQ1MGMxODAxEgsSBxDp04LGswQYAZIBIwoKcHJvamVjdF9pZBIVQhMxNjc4OTU0NDk1OTE4ODMwMjEy&filename=&opi=89354086",
    "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzdiNTY2NTcxMWMyMDRmYmNiYmQ0N2QzZWU0ZDc2NmNhEgsSBxDp04LGswQYAZIBIwoKcHJvamVjdF9pZBIVQhMxNjc4OTU0NDk1OTE4ODMwMjEy&filename=&opi=89354086",
    "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzE3MGUwMDc3ODQ3YzRjOTliYTQ3YmE2NjhiMTdlMTliEgsSBxDp04LGswQYAZIBIwoKcHJvamVjdF9pZBIVQhMxNjc4OTU0NDk1OTE4ODMwMjEy&filename=&opi=89354086",
    "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzcyNmIzMDVkYjY5MDQzNzRhN2NjNjM2Nzk3MThkMTZjEgsSBxDp04LGswQYAZIBIwoKcHJvamVjdF9pZBIVQhMxNjc4OTU0NDk1OTE4ODMwMjEy&filename=&opi=89354086"
)

Write-Host "Creating directories..."
New-Item -Path "C:\laragon\www\iddc-nasrul\assets\css" -ItemType Directory -Force | Out-Null
New-Item -Path "C:\laragon\www\iddc-nasrul\assets\js" -ItemType Directory -Force | Out-Null
New-Item -Path "C:\laragon\www\iddc-nasrul\assets\img" -ItemType Directory -Force | Out-Null

Write-Host "Downloading HTML files..."
for ($i=0; $i -lt $files.Length; $i++) {
    Invoke-WebRequest -Uri $urls[$i] -OutFile "C:\laragon\www\iddc-nasrul\$($files[$i])"
}

$configExtracted = $false
$customStyles = "@tailwind base;`n@tailwind components;`n@tailwind utilities;`n`n"

foreach ($file in $files) {
    $filePath = "C:\laragon\www\iddc-nasrul\$file"
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw
        
        if (-not $configExtracted) {
            if ($content -match '(?s)<script id="tailwind-config">(.*?)</script>') {
                $configScript = $matches[1]
                $splitArr = $configScript -split 'tailwind\.config\s*=\s*'
                if ($splitArr.Length -gt 1) {
                    $configObj = $splitArr[1].Trim()
                    $configFileContent = "/** @type {import('tailwindcss').Config} */`nmodule.exports = {`ncontent: ['./*.html'],`n" + $configObj.Substring(1)
                    Set-Content -Path 'C:\laragon\www\iddc-nasrul\tailwind.config.js' -Value $configFileContent
                    $configExtracted = $true
                }
            }
        }
        
        if ($file -eq 'index.html') {
            $regex = [regex]'(?s)<style>(.*?)</style>'
            $styleMatches = $regex.Matches($content)
            foreach ($m in $styleMatches) {
                $customStyles += $m.Groups[1].Value + "`n"
            }
        }
        
        $content = $content -replace '(?s)<script src="https://cdn\.tailwindcss\.com[^>]*><\/script>', ''
        $content = $content -replace '(?s)<script id="tailwind-config">.*?<\/script>', ''
        $content = $content -replace '(?s)<style>.*?<\/style>', ''
        
        $content = $content.Replace("</head>", "  <link rel=`"stylesheet`" href=`"./assets/css/styles.css`">`n</head>")
        $content = $content.Replace("</body>", "  <script src=`"./assets/js/main.js`"></script>`n</body>")
        
        Set-Content -Path $filePath -Value $content
        Write-Host "Processed $file"
    }
}
Set-Content -Path 'C:\laragon\www\iddc-nasrul\input.css' -Value $customStyles

if (-not (Test-Path "C:\laragon\www\iddc-nasrul\tailwindcss.exe")) {
    Write-Host "Downloading tailwindcss standalone CLI..."
    Invoke-WebRequest -Uri "https://github.com/tailwindlabs/tailwindcss/releases/download/v3.4.17/tailwindcss-windows-x64.exe" -OutFile "C:\laragon\www\iddc-nasrul\tailwindcss.exe"
}
Write-Host "Done."
