import React, { useState } from 'react';
import { nfc } from 'unorm';


function ChapterList() {

  const [chapters, setChapters] = useState([
      { 
        id: 1, 
        title: 'Unidad N° 1 (HTML y CSS)', 
        subtitle: '',
        content: [
        '>>>> HTML es un lenguaje de marcado para la creación de páginas web. Permite estructurar y mostrar el contenido de una página web. Los elementos de HTML se escriben en etiquetas.',
        '>>>> CSS significa "Cascading Style Sheets" (Hojas de estilo en cascada) y es un lenguaje de estilo utilizado para describir la presentación de documentos HTML y XML, incluyendo colores, diseño, fuentes y otros efectos visuales. CSS se utiliza para separar el contenido de un documento HTML o XML de su presentación visual. Con CSS, es posible controlar el diseño y la presentación de varios elementos HTML o XML de manera eficiente y consistente en todas las páginas de un sitio web.',
    ]
    },
    { 
        id: 2, 
        title: '', 
        subtitle: 'Etiquetas mas comunes en HTML',
        content: [
        '<html> : Define el inicio y fin del documento HTML. ',
        '<head> : Contiene información sobre la página, como el título y los enlaces a las hojas de estilo. ',
        '<title> : Define el título de la página que se muestra en la pestaña del navegador. ',
        '<body> : Contiene el contenido principal de la página. ',
        '<h1> : Define un encabezado principal. ',
        '<h2> : Define un encabezado de segundo nivel. ',
        '<h3> : Define un encabezado de tercer nivel. ',
        '<h4> : Define un encabezado de cuarto nivel. ',
        '<h5> : Define un encabezado de quinto nivel. ',
        '<h6> : Define un encabezado de sexto nivel. ',
        '<p> : Define un párrafo. ',
        '<a> : Crea un enlace a otra página o a una sección de la misma página. ',
        '<img> : Inserta una imagen en la página. ',
        '<ul> : Se utiliza para crear listas desordenadas. ',
        '<li> : Se utiliza para crear elementos de lista. ',
        '<ol> : Se utiliza para crear listas ordenadas. ',
        '<table> : Se utiliza para crear tablas. ',
        '<tr> : Se utiliza para definir una fila en una tabla. ',
        '<th> : Se utiliza para definir una celda de encabezado en una tabla. ',
        '<td> : Se utiliza para definir una celda de datos en una tabla. ',
        '<form> : Crea un formulario que se puede rellenar y enviar. ',
        '<input> : Crea un campo de entrada para que los usuarios puedan ingresar datos en un formulario. ',
        '<button> : Crea un botón que los usuarios pueden hacer clic para realizar una acción. ',
        '<div> : Se utiliza para crear contenedores de contenido y dar formato a la página. ',
        '<span> : Se utiliza para aplicar estilos a un pequeño trozo de texto. ',
    ]
    },

      { 
        id: 3, 
        title: '', 
        subtitle: 'Componentes mas comunes en CSS',
        content: [
          'selector : Selecciona los elementos HTML que se van a estilizar. ',
          'color : Define el color del texto. ',
          'background-color : Define el color de fondo de un elemento. ',
          'font-size : Define el tamaño de la fuente. ',
          'font-family : Define la fuente utilizada para el texto. ',
          'font-weight : Define la negrita del texto. ',
          'font-style : Define la cursiva del texto. ',
          'text-align : Define la alineación del texto. ',
          'line-height : Define la altura de línea del texto. ',
          'padding : Define el espacio entre el borde de un elemento y su contenido. ',
          'margin : Define el espacio entre los elementos. ',
          'border : Define el borde de un elemento. ',
          'border-radius : Define la esquina redondeada de un borde. ',
          'width : Define el ancho de un elemento. ',
          'height : Define la altura de un elemento. ',
          'display : Define cómo se muestra el elemento. ',
          'position : Define la posición de un elemento. ',
          'z-index : Define el orden de apilamiento de los elementos. ',
          'float : Define cómo se colocan los elementos en la página. ',
          'clear : Define cómo se borra el flotante en relación con otros elementos. ',
          'transition : Define cómo se realiza la transición entre los estados de un elemento. ',
          'animation : Define una animación para un elemento. ',
          'box-shadow : Define una sombra para un elemento. ',
          'text-shadow : Define una sombra para el texto. ',
    ]
    },

    { 
        id: 4, 
        title: 'Unidad N° 2 (Javascript)', 
        subtitle: '',
        content: [
          'JavaScript es un lenguaje de programación que se utiliza para hacer páginas web interactivas.', 
          'Permite añadir funcionalidades a una página web, como animaciones, validaciones de formularios, etc.', 
          'Se ejecuta en el lado del cliente, es decir, en el navegador web del usuario.'
    ] 
    },
    { 
        id: 5, 
        title: 'Unidad N° 3 (React)', 
        subtitle: '',
        content: [
        'JavaScript es un lenguaje de programación que se utiliza para hacer páginas web interactivas.', 
        'Permite añadir funcionalidades a una página web, como animaciones, validaciones de formularios, etc.', 
        'Se ejecuta en el lado del cliente, es decir, en el navegador web del usuario.'
    ]
    },
    { 
      id: 6, 
      title: 'Unidad N° 4 (React avanzado + Material UI)', 
      subtitle: 'Hola',
      content: [
      'JavaScript es un lenguaje de programación que se utiliza para hacer páginas web interactivas.', 
      'Permite añadir funcionalidades a una página web, como animaciones, validaciones de formularios, etc.', 
      'Se ejecuta en el lado del cliente, es decir, en el navegador web del usuario.'
  ]
  },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredChapters = chapters.filter((chapter) =>
  nfc(chapter.title.toLowerCase()).includes(nfc(searchTerm.toLowerCase())) ||
  chapter.content.some((paragraph) =>
    nfc(paragraph.toLowerCase()).includes(nfc(searchTerm.toLowerCase()))
  )
);


  return (
    <div>
      <input
        type="text"
        placeholder="Buscar capítulos..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <ul>
        {filteredChapters.map((chapter) => (
          <li key={chapter.id}>
            <h2>{chapter.title}</h2>
            <h3>{chapter.subtitle}</h3>
            <div className="chapter-content">
            {chapter.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChapterList;
