# Ejercicio "Invest API"

Se trata de desarrollar un servicio con REST API que sea capaz de entregar información precisa sobre valores de acciones para ciertas empresas en la bolsa de valores de Estados Unidos.

Como requerimientos, se encuentran los siguientes puntos:

1 - El servicio solamente puede ser utilizado por usuarios registrados, por lo que será necesario contar con un registro de usuario. Los datos a solicitar son: Name, Email, Password.

2 - La autenticación se hará de manera clásica: email + password y de ser correcto, se recibe un JWT (json web token) el cual se utiliza luego para subsiguientes peticiones. Para ello es necesario contar con un almacenamiento temporal para el JWT.

3 - Cada petición a recursos privados de la API debe contener el correspondiente JWT y este debe ser validado internamente para permitir el uso de la API.

4 - Obtener el valor de la acción para una determinada empresa, las empresas pueden ser:

Facebook (FB)
Apple (AAPL)
Microsoft (MSFT)
Google (GOOGL)
Amazon (AMZN)

Cada empresa tiene entre paréntesis el símbolo que la representa en el mercado de valores por ejemplo el símbolo de Facebook es "FB".

Se utilizará un servicio llamado Alpha Vantage para obtener los precios y poder utilizarlos luego. Para darle mas riqueza en la información al usuario, la respuesta de la API deberá incluir una comparación de precio del día con respecto al precio anterior y ver si el precio a incrementado o disminuído, en qué proporción porcentual (por ejemplo disminuyó un 1.4% el precio) y en qué valor (por ejemplo disminuyó USD 2.38). Cabe aclarar que la comparación se hace siempre contra el valor de cierre (close) del día anterior. Finalmente la información debe incluir un código de color: en color_code = green en el caso de que haya habido un incremento y color_code = red en el caso contrario.

* Alpha Vantage API:
  Documentacion: https://www.alphavantage.co/documentation/
  API Key: X86NOH6II01P7R24
  A considerar: utilizamos solamente la llamada para obtener precios diarios (TIME_SERIES_DAILY)

  Ejemplo de una API call para obtener informacion de valores de accion para Facebook:
  https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=FB&outputsize=compact&apikey=X86NOH6II01P7R24
Un ejemplo de cómo sería una posible respuesta para el caso de obtener el valor de acción de Facebook:
```json
{
    "symbol": "FB",
    "value" : "168.29",
    "previous" : "165.68",
    "change_percent" : "0.98",
    "change_value": "2.61",
    "color_code" : "green"
}
```
5- Llevar un registro de log para cada petición hecha a la API (archivo invest-api.log), se sugiere el siguiente formato:

timestamp | host | url | action | data

Consideraciones:

El desarrollo del ejercicio debe ser utilizando NodeJS.
Nombre de los métodos de la API quedan a su criterio.
Utilizar git para control de código fuente.
Repositorio para usuarios, JWT, etc, queda a su criterio.
