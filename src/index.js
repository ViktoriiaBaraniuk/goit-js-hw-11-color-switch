import './styles.css';
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  
  const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
  };
  
  
  
  
  const colorSwitcher = {
    intervalId: null,
    isActiveStartBtn: false,
    min: 0,
    max: colors.length -1,
    
    start () {
      if (this.isActiveStartBtn) {
        return;
      }
      
      this.isActiveStartBtn = true;
  
      const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - this.min + 1) + min);
      }; 
  
      this.intervalId = setInterval(() => {
      document.body.style.backgroundColor = colors[randomIntegerFromInterval(this.min, this.max)];
    }, 1000);
   },
   
    stop () {
      clearInterval(this.intervalId);
      this.isActiveStartBtn = false;
   },
  }
  
  refs.startBtn.addEventListener('click', () => {
      colorSwitcher.start ();
  });
  
  refs.stopBtn.addEventListener('click', () => {
      colorSwitcher.stop();
  });
  
  
   
  
  
  