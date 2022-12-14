import { Table } from "./script.js";

const dataTable = new Table({
    header: ["Name", "Email", "phone",],
    body: [
        ["Ahmad", "ahmad2090@gmail.com", "(+62) 852111277"],
        ["Akbar", "akbartanj012@gmail.com", "(+62) 8216765"],
        ["Budi", "Budidoremi@gmail.com", "(+62) 89757562"],
        ["Pelangi", "pelangi1234@gmail.com", "(+62) 878767896"],
        ["Zoro", "roronoazoro@mail.com", "(+62) 88536387"]
    ]
  });
  const app = document.getElementById("app");
  dataTable.render(app);
