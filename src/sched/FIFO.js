export default function FIFO(data) {
    const sortedData = [...data];

    sortedData.sort((a, b) => a.arrival_time - b.arrival_time);
    let first_free_start_time = 0;
  
    sortedData.forEach((objeto) => {
      if (first_free_start_time < objeto.arrival_time) {
        objeto.start_time = objeto.arrival_time;
        first_free_start_time = objeto.arrival_time + objeto.duration;
      } else {
        objeto.start_time = first_free_start_time;
        first_free_start_time = first_free_start_time + objeto.duration;
      }
      objeto.end_time = objeto.start_time + objeto.duration;
    });
  
    return sortedData;
  }
  