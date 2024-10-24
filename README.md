# SpringbootDemo
Demo de springboot
1. Arquitectura MVC

¿Qué es la arquitectura MVC y cuál es su propósito en el desarrollo de aplicaciones web?

MVC (Modelo-Vista-Controlador) es un patrón de arquitectura de software que separa la aplicación en tres componentes interconectados:

    Modelo: Representa los datos de la aplicación y la lógica de negocio.
    Vista: Muestra la información al usuario y se encarga de la interacción.
    Controlador: Recibe las solicitudes del usuario, interactúa con el modelo y actualiza la vista.

Propósito:

MVC promueve la modularidad, la reutilización de código y la separación de responsabilidades, lo que facilita el desarrollo, la prueba y el mantenimiento de aplicaciones web.
2. Programación Orientada a Objetos (POO)

¿Qué es la programación orientada a objetos (POO) y menciona algunos conceptos clave asociados a ella?

La POO es un paradigma de programación que organiza el software en unidades llamadas "objetos", que combinan datos (atributos) y acciones (métodos).

Conceptos clave:

    Abstracción: Representar las características esenciales de un objeto sin incluir detalles innecesarios.
    Encapsulamiento: Ocultar los detalles internos de un objeto y proporcionar una interfaz pública para interactuar con él.
    Herencia: Crear nuevas clases a partir de clases existentes, heredando sus atributos y métodos.
    Polimorfismo: La capacidad de un objeto de tomar diferentes formas o comportarse de manera diferente en diferentes contextos.

3. Patrones de Diseño J2EE

Menciona algunos patrones de diseño J2EE y explica brevemente su propósito.

    DAO (Data Access Object): Abstrae el acceso a datos, permitiendo cambiar la fuente de datos sin afectar la lógica de la aplicación.
    Singleton: Asegura que solo exista una instancia de una clase en la aplicación.
    MVC: Ya explicado en la pregunta 1.
    Front Controller: Centraliza el manejo de las solicitudes web.

4. APIs, Sockets y Webservices

¿Qué son las APIs, sockets y webservices? ¿Cuál es su propósito en el desarrollo de aplicaciones?

    API (Interfaz de Programación de Aplicaciones): Un conjunto de reglas y especificaciones que permiten que diferentes aplicaciones se comuniquen entre sí.
    Sockets: Un mecanismo de comunicación que permite la transmisión de datos bidireccional entre aplicaciones.
    Webservices: Un tipo de API que utiliza protocolos web (como HTTP) para el intercambio de datos.

Propósito:

Facilitan la integración de diferentes sistemas y la creación de aplicaciones distribuidas.
5. REST y SOAP

¿Qué significa REST y SOAP en el contexto de servicios web? ¿Cuáles son las principales diferencias entre ellos?

REST (Representational State Transfer): Un estilo de arquitectura que utiliza los principios de la web para crear servicios web.

SOAP (Simple Object Access Protocol): Un protocolo de mensajería basado en XML para el intercambio de información estructurada.

6. Kubernetes

¿Qué es Kubernetes y cuál es su función en el despliegue y gestión de aplicaciones en contenedores?

Kubernetes es un sistema de código abierto para automatizar el despliegue, la escalabilidad y la administración de aplicaciones en contenedores.

Funciones:

    Orquestación de contenedores: Automatiza la programación, el despliegue y la escalabilidad de contenedores.
    Gestión de recursos: Asigna recursos a los contenedores y garantiza su disponibilidad.
    Descubrimiento de servicios: Permite que los contenedores se encuentren y se comuniquen entre sí.
    Balanceo de carga: Distribuye el tráfico entre los contenedores.
    Autoescalado: Ajusta automáticamente el número de contenedores en función de la demanda.
    Rollouts y rollbacks: Facilita la actualización y la reversión de aplicaciones.


    POSTGRES SQL
    1.- Generar script para poblar todas las tablas.
        "pg_dump -h localhost -p 5432 -U usuario -s almacenes > estructura.sql"
    
    2.- Mostrar el número de ventas de cada producto, ordenado de más a menos ventas.
        "SELECT COUNT(Producto) as NoVentas FROM Venta Group By Producto Order By Desc"

    3.- Obtener un informe completo de ventas, indicando el nombre del cajero que realizo la venta, nombre y precios de los productos vendidos, y el piso en el que se encuentra la máquina registradora donde se realizó la venta.
        "SELECT c.NomApels as NombreCajero, p.Nombre as Prod, p.precio as Precio, m.Piso as PisoMaquina From Venta as v
        JOIN  PRODUCTOS as p on v.Producto = p.Codigo
        JOIN  CAJEROS as c on v.Cajero = p.Codigo
        JOIN  MAQUINAS_REGISTRADORAS as m on v.Maquina = p.Codigo"
    
    4.-Obtener las ventas totales realizadas en cada piso.
        "SELECT COUNT(v.Maquina) as ventas, m.piso FROM VENTA as v
        JOIN  MAQUINAS_REGISTRADORAS as m on v.Maquina = p.Codigo
        GROUP BY m.piso"
    
    5.- Obtener el código y nombre de cada cajero junto con el importe total de sus ventas.
        "SELECT COUNT(v.cajero) as ventas, c.NomApels as Cajero, SUM(p.precio), as Monto  FROM VENTA as v
        JOIN  PRODUCTOS as p on v.Producto = p.Codigo
        JOIN  CAJEROS as c on v.Cajero = p.Codigo
        GROUP BY c.NomApels"

    6.- Obtener el código y nombre de cada cajero junto con el importe total de sus ventas.
        "SELECT COUNT(v.cajero) as ventas, c.NomApels as Cajero, SUM(p.precio) as Monto  FROM VENTA as v
        JOIN  PRODUCTOS as p on v.Producto = p.Codigo
        JOIN  CAJEROS as c on v.Cajero = c.Codigo
        GROUP BY c.NomApels
        HAVING Monto <= 5000"
        
    
