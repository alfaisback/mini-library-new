class Table {
    constructor(grid) {
      this.grid = grid;
    }
  
    createHeader(data) {
      let open = "<thead><tr>";
      let close = "</tr></thead>";
      data.forEach((d) => {
        open += `<th>${d}</th>`;
      });
  
      return open + close;
    }
  
    createBody(data) {
      let open = "<tbody>";
      let close = "</tbody>";
  
      data.forEach((d) => {
        open += `
          <tr>
            <td>${d[0]}</td>
            <td>${d[1]}</td>
            <td>${d[2]}</td>
            
          </tr>
        `;
      });
  
      return open + close;
    }
  
    render(element) {
      let table =
        "<table class='table table-hover'>" +
        this.createHeader(this.grid.columns) +
        this.createBody(this.grid.data) +
        "</table>";
      element.innerHTML = table;
    }
  }
  
  const table = new Table({
    columns: ["Name", "Email", "phone",],
    data: [
        ["Ahmad", "ahmad2090@gmail.com", "(+62) 852111277"],
        ["Akbar", "akbartanj012@gmail.com", "(+62) 8216765"],
        ["Budi", "Budidoremi@gmail.com", "(+62) 89757562"],
        ["Pelangi", "pelangi1234@gmail.com", "(+62) 878767896"],
        ["Zoro", "roronoazoro@mail.com", "(+62) 88536387"]
    ]
  });
  const app = document.getElementById("app");
  table.render(app);