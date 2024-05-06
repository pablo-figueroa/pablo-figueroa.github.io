npm install -D @tailwindcss/forms
npm install -D @tailwindcss/typography
npm install -D @tailwindcss/aspect-ratio

# Define el archivo tailwind.config.js
FILE="tailwind.config.js"

# Verifica si el archivo existe
if [ -f "$FILE" ]; then
# Agrega los plugins al final del archivo usando sed

sed -i "/plugins: \[/a \    require("@tailwindcss/typography")," "$FILE"
sed -i "/plugins: \[/a \    require("@tailwindcss/aspect-ratio")," "$FILE"
sed -i "/plugins: \[/a \    require("@tailwindcss/forms")," "$FILE"

echo '[32mPlugins agregados en tailwind.config.js[0m' 
echo "[31mAgregar las comillas en plugins en tailwind.config.js[0m"

else
    echo "El archivo $FILE no existe."
fi
