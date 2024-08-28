// Sample data array

const getData = async () => {
    const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos`,{
      method:'GET'
    })
   const data = await response.json()
   console.log(data)
   renderTable(data)
  }
  // Function to render data into the table
   function renderTable(data) {
      const dataList = document.getElementById('dataList');
      data.modelos.forEach(item => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${item.codigo}</td>
              <td>${item.nome}</td>
             `;
          dataList.appendChild(row);
      });
  }
  getData()
  // Call the function to render data
  