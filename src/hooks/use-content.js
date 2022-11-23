import { useState , useEffect , useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useContent ( target ){ // target will be film or series

    const {firebase } = useContext( FirebaseContext );
    const [ content , setContent ] = useState( [] );

    useEffect( () => {
        firebase.firestore().collection( target ).get()
        .then( (snapshot ) => {
            const allContent = snapshot.docs.map( ( contentObj ) => ({
                ...contentObj.data() ,
                docID : contentObj.id , 
            }))
            setContent( allContent );
        })
        .catch( error => {
            console.log(error );
        })
    } , [] )

    // console.log(content);
    return { [target] : content };
}
