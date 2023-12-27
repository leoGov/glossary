const mindMap = {
    "nodes": [
      {
        "id": "1",
        "position": {"x": 0, "y": 0},
        "data": {"label": "Веб-приложение"},
        "type": "input"
      },
      {
        "id": "2",
        "position": {"x": 0, "y": 80},
        "data": {"label": "Бандлер"},
        "type": ""
      },
      {
        "id": "3",
        "position": {"x": -300, "y": 180},
        "data": {"label": "Webpack"},
        "type": ""
      },
      {
        "id": "4",
        "position": {"x": 0, "y": 180},
        "data": {"label": "Parcel"},
        "type": ""
      },
      {
        "id": "5",
        "position": {"x": 300, "y": 180},
        "data": {"label": "Vite"},
        "type": ""
      },
      {
        "id": "6",
        "position": {"x": -550, "y": 300},
        "data": {"label": "HMR"},
        "type": "output"
      },
      {
        "id": "7",
        "position": {"x": -390, "y": 300},
        "data": {"label": "Plugin System"},
        "type": "output"
      },
      {
        "id": "8",
        "position": {"x": -230, "y": 300},
        "data": {"label": "DevServer"},
        "type": "output"
      },
      {
        "id": "9",
        "position": {"x": -180, "y": 400},
        "data": {"label": "Zero-config"},
        "type": "output"
      },
      {
        "id": "10",
        "position": {"x": 0, "y": 340},
        "data": {"label": "Automatic Asset Resolution"},
        "type": "output"
      },
      {
        "id": "11",
        "position": {"x": 180, "y": 400},
        "data": {"label": "Broad Language Support"},
        "type": "output"
      },
      {
        "id": "12",
        "position": {"x": 460, "y": 320},
        "data": {"label": "First Development Server"},
        "type": "output"
      },
      {
        "id": "13",
        "position": {"x": 300, "y": 300},
        "data": {"label": "Plugin System"},
        "type": "output"
      },
      {
        "id": "14",
        "position": {"x": 620, "y": 350},
        "data": {"label": "Modern Development"},
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
        "id": "2-3",
        "source": "2",
        "target": "3",
        "label": "Реализация"
      },
      {
        "id": "2-4",
        "source": "2",
        "target": "4",
        "label": "Реализация"
      },
      {
        "id": "2-5",
        "source": "2",
        "target": "5",
        "label": "Реализация"
      },
      {
        "id": "3-6",
        "source": "3",
        "target": "6",
        "label": "Использование"
      },
      {
        "id": "3-7",
        "source": "3",
        "target": "7",
        "label": "Использование"
      },
      {
        "id": "3-8",
        "source": "3",
        "target": "8",
        "label": "Использование"
      },
      {
        "id": "4-9",
        "source": "4",
        "target": "9",
        "label": "Использование"
      },
      {
        "id": "4-10",
        "source": "4",
        "target": "10",
        "label": "Использование"
      },
      {
        "id": "4-11",
        "source": "4",
        "target": "11",
        "label": "Использование"
      },
      {
        "id": "5-12",
        "source": "5",
        "target": "12",
        "label": "Использование"
      },
      {
        "id": "5-13",
        "source": "5",
        "target": "13",
        "label": "Использование"
      },
      {
        "id": "5-14",
        "source": "5",
        "target": "14",
        "label": "Использование"
      },
      
    ]
  }
  
  
  export default mindMap;
  