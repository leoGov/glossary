const mindMap = {
    "nodes": [
      {
        "id": "1",
        "position": {"x": 0, "y": 0},
        "data": {"label": "Фронтенд"},
        "type": "input"
      },
      {
        "id": "2",
        "position": {"x": -300, "y": 100},
        "data": {"label": "Фреймворк"}
      },
      {
        "id": "3",
        "position": {"x": 300, "y": 100},
        "data": {"label": "Инструмент сборки"},
      },
      {
        "id": "4",
        "position": {"x": 200, "y": 200},
        "data": {"label": "Webpack"},
        "type": "output"
      },
      {
        "id": "5",
        "position": {"x": 400, "y": 200},
        "data": {"label": "Babel"},
        "type": "output"
      },
      {
        "id": "6",
        "position": {"x": -580, "y": 200},
        "data": {"label": "React"},
      },
      {
        "id": "7",
        "position": {"x": -300, "y": 200},
        "data": {"label": "Vue"},
      },
      {
        "id": "8",
        "position": {"x": -20, "y": 200},
        "data": {"label": "Angular"},
      },
      {
        "id": "9",
        "position": {"x": -900, "y": 300},
        "data": {"label": "ReactDOM"},
        "type": "output"
      },
      {
        "id": "10",
        "position": {"x": -740, "y": 300},
        "data": {"label": "JSX"},
        "type": "output"
      },
      {
        "id": "11",
        "position": {"x": -580, "y": 300},
        "data": {"label": "Redux"},
        "type": "output"
      },
      {
        "id": "12",
        "position": {"x": -400, "y": 350},
        "data": {"label": "Template"},
        "type": "output"
      },
      {
        "id": "13",
        "position": {"x": -300, "y": 420},
        "data": {"label": "Script"},
        "type": "output"
      },
      {
        "id": "14",
        "position": {"x": -200, "y": 350},
        "data": {"label": "Style"},
        "type": "output"
      },
      {
        "id": "15",
        "position": {"x": -20, "y": 300},
        "data": {"label": "RxJS"},
        "type": "output"
      },
  
    ],
    "edges": [
      {
        "id": "1-2",
        "source": "1",
        "target": "2",
        "label": "Реализация"
      },
      {
        "id": "1-3",
        "source": "1",
        "target": "3",
        "label": "Реализация"
      },
      {
        "id": "3-4",
        "source": "3",
        "target": "4",
        "label": "Выбор инструмента"
      },
      {
        "id": "3-5",
        "source": "3",
        "target": "5",
        "label": "Выбор инструмента"
      },
      {
        "id": "2-6",
        "source": "2",
        "target": "6",
        "label": "Используемые фреймворки"
      },
      {
        "id": "2-7",
        "source": "2",
        "target": "7",
        "label": "Используемые фреймворки"
      },
      {
        "id": "2-8",
        "source": "2",
        "target": "8",
        "label": "Используемые фреймворки"
      },
      {
        "id": "6-9",
        "source": "6",
        "target": "9",
        "label": "Функционал"
      },
      {
        "id": "6-10",
        "source": "6",
        "target": "10",
        "label": "Функционал"
      },
      {
        "id": "6-11",
        "source": "6",
        "target": "11",
        "label": "Функционал"
      },
      {
        "id": "7-12",
        "source": "7",
        "target": "12",
        "label": "Функционал"
      },
      {
        "id": "7-13",
        "source": "7",
        "target": "13",
        "label": "Функционал"
      },
      {
        "id": "7-14",
        "source": "7",
        "target": "14",
        "label": "Функционал"
      },
      {
        "id": "8-15",
        "source": "8",
        "target": "15",
        "label": "Функционал"
      },
      
    ]
  }
  
  
  export default mindMap;
  