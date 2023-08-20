import axios from "axios";

export async function Post( data: {textarea: string, input: string, select: string}, setRes: any, setQuestion: any, question: any){
    await axios.post('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium',{
        inputs: {"text": JSON.stringify(data)},
    },{headers: { Authorization: "Bearer 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" },}
    ).then(function(response){
        setRes(response.data.generated_text);
        localStorage.setItem("questions", JSON.stringify([...question,{id: Date.now(), title: data.input, problem: data.select}]))
        setQuestion([...question, {id: Date.now(), title: data.input, problem: data.select}]);
    })
}