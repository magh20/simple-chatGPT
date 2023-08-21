import axios from "axios";
import { FormValues } from "../page";

export async function Post( data: FormValues, setRes: any, setQuestion: any, question: any, setLoading: any, setShow: any, id: number){
    await axios.post('https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill',{
        inputs: {"text": JSON.stringify(data.textarea)},
    },{headers: { Authorization: "Bearer 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" },}
    ).then(function(response){
        const date = new Date();
        const Time = date.getHours()
            + ':' + date.getMinutes()
            + ":" + date.getSeconds();
        setRes((i: any)=>
            i.map((item: any)=>(
                {...item, resp : item.id == id ? response.data.generated_text : item.resp,
                Rtime : item.id == id ? Time : item.Rtime}
            )),
        );
        setQuestion([...question, {id: Date.now(), title: data.input, problem: data.select}]);
        console.log(response);
    }).catch(error => {
        console.log(error);
    }).finally(()=>{
        setLoading(false);
        setShow(true);
    })
}