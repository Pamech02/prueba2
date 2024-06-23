const shuffleArray = (array) => {
    const shuffledArray = [...array]; // Copiamos el array original para no modificarlo directamente
    
    // Algoritmo de Fisher-Yates para mezclar el array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    
    return shuffledArray;
  };

  export default shuffleArray;