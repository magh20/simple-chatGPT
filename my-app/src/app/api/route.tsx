import axios from "axios";

export async function Post( data: {textarea: string, input: string, select: string}, setRes: any, setQuestion: any, question: any, setLoading: any, setShow: any, id: number){
    await axios.post('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium',{
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
        console.log(response)
    }).catch(error => {
        console.log(error);
    }).finally(()=>{
        setLoading(false);
        setShow(true);
    })
}