export default function selctionfilter ( { series , films }){
    return {

        series : [
            {
                title:"Documentaries" ,
                data : series.filter( item => item.gener==='documentaries' )
            },
            {
                title:"Comedies" ,
                data : series.filter( item => item.gener==='comedies' )
            },
            {
                title:"Children" ,
                data : series.filter( item => item.gener==='children' )
            },
            {
                title:"Crime" ,
                data : series.filter( item => item.gener==='Crime' )
            },
            {
                title:"Feel Good" ,
                data : series.filter( item => item.gener==='feel-good' )
            },
            
        ] ,

        films : [
            {
                title:"Drama" ,
                data : films.filter( item => item.gener==='drama' )
            },
            {
                title:"Thriller" ,
                data : films.filter( item => item.gener==='thriller' )
            },
            {
                title:"Children" ,
                data : films.filter( item => item.gener==='children' )
            },
            {
                title:"Suspense" ,
                data : films.filter( item => item.gener==='suspense' )
            },
            {
                title:"Romance" ,
                data : films.filter( item => item.gener==='romance' )
            },
        ]

    }
}