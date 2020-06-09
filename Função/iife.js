/// função para fugir do escopo global (função auto invocada).

(function() {
    console.log('Será invocada na hora!')
    console.log('Foge do escopo mais abrangante!')
})()