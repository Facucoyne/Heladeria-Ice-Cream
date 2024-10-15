
    function comprar(){
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Deseas Comprar El Producto?",
            text: "Escoge una opcion!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Comprar!",
            cancelButtonText: "Cancelar!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
                title: "Compra Realizada!",
                text: "Gracias por comprar nuestro producto.",
                icon: "success"
            });
            } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
            ) {
            swalWithBootstrapButtons.fire({
                title: "Producto Eliminado",
                text: "Vuelve Pronto",
                icon: "error"
            });
            }
        });
    }


    
const fulImgBox = document.getElementById("fulImgBox");
fulImg = document.getElementById("fulImg");

function openImg(refence){
    fulImgBox.style.display = "flex"
    fulImg.src = refence
}

function closeImg(){
    fulImgBox.style.display = "none"
}
