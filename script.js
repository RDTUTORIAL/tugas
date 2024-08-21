function danis(){
    Swal.fire({
        title: `Profile of DANIS`,
        html: `
            <img src="${document.getElementById("danisimg").src}" alt="Profile Picture" width="100">
            <br>
            <p>Name: Kadek Daniswara Bala Pradana</p>
            <p>Umur: 16</p>
            <p>Ultah: 10-03-2008</p>
            <p>Alamat: Bantass</p>
        `,
        confirmButtonText: "Go to Instagram",
        preConfirm: () => {
            window.open(`https://instagram.com/kd.dnswra`, '_blank'); 
        }
    });
}


function putra(){
    Swal.fire({
        title: `Profile of Putra`,
        html: `
            <img src="${document.getElementById("putraimg").src}" alt="Profile Picture" width="100">
            <br>
            <p>Name: I Kadek Putra Sukarma</p>
            <p>Umur: 16</p>
            <p>Ultah: 09-10-2007</p>
            <p>Alamat: Muding</p>
        `,
        confirmButtonText: "Go to Instagram",
        preConfirm: () => {
            window.open(`https://instagram.com/karma.ptra`, '_blank');
        }
    });
}

function sadewa(){
    Swal.fire({
        title: `Profile of Putra`,
        html: `
            <img src="${document.getElementById("sadewaimg").src}" alt="Profile Picture" width="100">
            <br>
            <p>Name: Adek Sadewa Prawista Wisnawa</p>
            <p>Umur: 16</p>
            <p>Ultah: 11-10-2007</p>
            <p>Alamat: Kenyeri</p>
        `,
        confirmButtonText: "Go to Instagram",
        preConfirm: () => {
            window.open(`https://instagram.com/prawwista`, '_blank');
        }
    });
}
