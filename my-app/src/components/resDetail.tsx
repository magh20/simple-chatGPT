import { useCont } from "@/contextApi/context";


export const ResDetail = ({show}: any) => {
    const {res} = useCont();

    return(
        <div className="w-full" style={{
            visibility: !show ? "visible" : "hidden",
            width: !show ? "" : 0,
            height: !show ? "" : 0,
          }}>
            <section className="w-full">
                <article className="w-full">
                    <span className="bg-gray-400 w-[50px] h-[50px]"></span>
                    <span>محمد امین قربانی</span>
                    <span>{Date.UTC(1,2,3)}</span>
                    <span>{Date.UTC(0,0,0,1,2,3)}</span>
                </article>

                <article></article>
            </section>

            <section>
                <article>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </article>

                <article></article>
            </section>
        </div>
    );
}