// /backend/data/pyramidData.js
const pyramidData = [
    {
      id: 1,
      name: 'Objetivo',
      description: 'El propósito final que deseamos alcanzar.',
      processes: [
        {
          id: 2,
          name: 'Medios',
          description: 'El medio que nos llevará al objetivo.',
          tasks: [
            { id: 3, name: 'Tarea 1', description: 'Primera tarea importante.' },
            { id: 4, name: 'Tarea 2', description: 'Segunda tarea crucial.' },
            // ... más tareas si es necesario
          ],
        },
        // ... más procesos si es necesario
      ],
    },
    // ... más niveles si es necesario
  ];
  
  module.exports = pyramidData;
  