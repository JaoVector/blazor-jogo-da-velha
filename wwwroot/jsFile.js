window.ShowSwal = (player) => {
    Swal.fire({
        title: player + 'Ganhou',
        width: 350,
        padding: '3em',
        color: '#716add',
        backdrop: 'rgb(0,0,123,0.4) left top no-repeat'
    })
}

window.ShowTie = () => {
    Swal.fire({
        title: 'Ninguém Ganhou',
        width: 350,
        padding: '3em',
        color: '#716add',
        backdrop: 'rgb(0,0,123,0.4) left top no-repeat'
    })
}