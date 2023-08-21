"use client"
const PN = require("persian-number");
import Gregorian_to_jalali from "./Gregorian_to_jalali";

export const ResDetail = ({quest, resp, date, Qtime, Rtime}: any) => {
    

    return(
        <div className="w-full mt-2">
            <section className="w-full flex flex-col justify-start items-end">
                <article className="w-full flex flex-row-reverse justify-start items-center pr-2 mt-2">
                    <span className=" ml-2">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="40" height="40" rx="20" fill="url(#pattern0)"/>
                            <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_0_4149" transform="scale(0.01)"/>
                                </pattern>
                                <image id="image0_0_4149" width="100" height="100" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAMQGlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnluSkEBooUsJvQkiNYCUEFoA6UWwEZIAocQYCCJ2dFHBtYsFbOiqiGIHxI4oFhbF3hdEVJR1sWBD5U0K6LqvfG++b+78958z/zlz7tw7dwBQO80RiXJQdQByhfni2JAA+rjkFDrpGUCBOlAG7sCEw80TMaOjIwAsQ+3fy/tbAJG21x2kWv/s/69Fg8fP4wKAREOcxsvj5kJ8GAC8kisS5wNAlPLm0/JFUgwr0BLDACFeJMUZclwpxWlyvF9mEx/LgrgZACUVDkecAYDqVcjTC7gZUEO1D2InIU8gBECNDrFvbu4UHsSpENtAGxHEUn1G2g86GX/TTBvW5HAyhrF8LrKiFCjIE+Vwpv+f6fjfJTdHMuTDClaVTHForHTOMG93sqeES7EKxL3CtMgoiDUh/ijgyewhRimZktAEuT1qyM1jwZwBHYideJzAcIgNIQ4W5kRGKPi0dEEwG2K4QtBCQT47HmI9iBfx84LiFDZbxFNiFb7QunQxi6ngL3DEMr9SX48k2QlMhf6bTD5boY+pFmXGJ0FMgdiiQJAYCbEqxI552XHhCpsxRZmsyCEbsSRWGr8FxLF8YUiAXB8rSBcHxyrsS3PzhuaLbckUsCMV+GB+ZnyoPD9YM5cjix/OBbvKFzIThnT4eeMihubC4wcGyeeOPecLE+IUOh9F+QGx8rE4RZQTrbDHzfg5IVLeDGLXvII4xVg8MR8uSLk+ni7Kj46Xx4kXZXHCouXx4MtBBGCBQEAHEljTwBSQBQRtvfW98E7eEww4QAwyAB84KJihEUmyHiG8xoEi8CdEfJA3PC5A1ssHBZD/OszKrw4gXdZbIBuRDZ5CnAvCQQ68l8hGCYe9JYInkBH8wzsHVi6MNwdWaf+/54fY7wwTMhEKRjLkka42ZEkMIgYSQ4nBRFvcAPfFvfEIePWH1Rln4J5D8/huT3hKaCc8JtwkdBDuThYUi3+KcizogPrBilyk/ZgL3ApquuEBuA9Uh8q4Dm4AHHBX6IeJ+0HPbpBlKeKWZoX+k/bfZvDD01DYkZ3IKFmX7E+2+Xmkqp2q27CKNNc/5kcea9pwvlnDPT/7Z/2QfR5sw3+2xBZhh7AW7Ax2ETuO1QM6dgprwFqxE1I8vLqeyFbXkLdYWTzZUEfwD39DT1aayTynGqcepy/yvnx+ofQbDVhTRNPFgozMfDoT7gh8OlvIdRxJd3ZydgFAur/IP19vY2T7BqLT+p2b/wcAPqcGBwePfefCTgFwwAO+/ke/czYMuHUoA3DhKFciLpBzuPRCgF8JNfim6QNjYA5s4Hyc4S7mDfxBEAgDUSAeJINJMPpMuM7FYBqYCeaBElAGloM1YAPYDLaBXWAvOAjqwXFwBpwHl8FVcBPch6unG7wEfeA9GEAQhIRQERqij5gglog94owwEF8kCIlAYpFkJBXJQISIBJmJzEfKkJXIBmQrUo0cQI4iZ5CLSDtyF+lEepA3yGcUQ1VQLdQItUJHoQyUiYaj8ehENAOdihahC9Cl6Dq0Ct2D1qFn0MvoTbQDfYn2YwBTxnQwU8wBY2AsLApLwdIxMTYbK8XKsSqsFmuEz/k61oH1Yp9wIk7D6bgDXMGheALOxafis/El+AZ8F16HN+PX8U68D/9GoBIMCfYELwKbMI6QQZhGKCGUE3YQjhDOwXepm/CeSCTqEK2JHvBdTCZmEWcQlxA3EvcRTxPbiV3EfhKJpE+yJ/mQokgcUj6phLSetId0inSN1E36qKSsZKLkrBSslKIkVCpWKlfarXRS6ZrSM6UBsjrZkuxFjiLzyNPJy8jbyY3kK+Ru8gBFg2JN8aHEU7Io8yjrKLWUc5QHlLfKyspmyp7KMcoC5bnK65T3K19Q7lT+pKKpYqfCUpmgIlFZqrJT5bTKXZW3VCrViupPTaHmU5dSq6lnqY+oH1Vpqo6qbFWe6hzVCtU61Wuqr9TIapZqTLVJakVq5WqH1K6o9aqT1a3UWeoc9dnqFepH1W+r92vQNEZrRGnkaizR2K1xUeO5JknTSjNIk6e5QHOb5lnNLhpGM6exaFzafNp22jlatxZRy1qLrZWlVaa1V6tNq09bU9tVO1G7ULtC+4R2hw6mY6XD1snRWaZzUOeWzmddI12mLl93sW6t7jXdD3oj9Pz1+Hqlevv0bup91qfrB+ln66/Qr9d/aIAb2BnEGEwz2GRwzqB3hNYI7xHcEaUjDo64Z4ga2hnGGs4w3GbYathvZGwUYiQyWm901qjXWMfY3zjLeLXxSeMeE5qJr4nAZLXJKZMXdG06k55DX0dvpveZGpqGmkpMt5q2mQ6YWZslmBWb7TN7aE4xZ5inm682bzLvszCxGGsx06LG4p4l2ZJhmWm51rLF8oOVtVWS1UKreqvn1nrWbOsi6xrrBzZUGz+bqTZVNjdsibYM22zbjbZX7VA7N7tMuwq7K/aovbu9wH6jfftIwkjPkcKRVSNvO6g4MB0KHGocOh11HCMcix3rHV+NshiVMmrFqJZR35zcnHKctjvdH605Omx08ejG0W+c7Zy5zhXON1yoLsEuc1waXF672rvyXTe53nGjuY11W+jW5PbV3cNd7F7r3uNh4ZHqUelxm6HFiGYsYVzwJHgGeM7xPO75ycvdK9/roNdf3g7e2d67vZ+PsR7DH7N9TJePmQ/HZ6tPhy/dN9V3i2+Hn6kfx6/K77G/uT/Pf4f/M6YtM4u5h/kqwClAHHAk4APLizWLdToQCwwJLA1sC9IMSgjaEPQo2Cw4I7gmuC/ELWRGyOlQQmh46IrQ22wjNpddze4L8wibFdYcrhIeF74h/HGEXYQ4onEsOjZs7KqxDyItI4WR9VEgih21KuphtHX01OhjMcSY6JiKmKexo2NnxrbE0eImx+2Oex8fEL8s/n6CTYIkoSlRLXFCYnXih6TApJVJHeNGjZs17nKyQbIguSGFlJKYsiOlf3zQ+DXjuye4TSiZcGui9cTCiRcnGUzKmXRistpkzuRDqYTUpNTdqV84UZwqTn8aO60yrY/L4q7lvuT581bzevg+/JX8Z+k+6SvTn2f4ZKzK6Mn0yyzP7BWwBBsEr7NCszZnfciOyt6ZPZiTlLMvVyk3NfeoUFOYLWyeYjylcEq7yF5UIuqY6jV1zdQ+cbh4Rx6SNzGvIV8L/si3Smwkv0g6C3wLKgo+TkucdqhQo1BY2Drdbvri6c+Kgot+m4HP4M5ommk6c97MzlnMWVtnI7PTZjfNMZ+zYE733JC5u+ZR5mXP+73YqXhl8bv5SfMbFxgtmLug65eQX2pKVEvEJbcXei/cvAhfJFjUtthl8frF30p5pZfKnMrKy74s4S659OvoX9f9Org0fWnbMvdlm5YTlwuX31rht2LXSo2VRSu7Vo1dVbeavrp09bs1k9dcLHct37yWslaytmNdxLqG9Rbrl6//siFzw82KgIp9lYaViys/bORtvLbJf1PtZqPNZZs/bxFsubM1ZGtdlVVV+TbitoJtT7cnbm/5jfFb9Q6DHWU7vu4U7uzYFburudqjunq34e5lNWiNpKZnz4Q9V/cG7m2odajduk9nX9l+sF+y/8WB1AO3DoYfbDrEOFR72PJw5RHakdI6pG56XV99Zn1HQ3JD+9Gwo02N3o1Hjjke23nc9HjFCe0Ty05STi44OXiq6FT/adHp3jMZZ7qaJjfdPzvu7I3mmOa2c+HnLpwPPn+2hdly6oLPheMXvS4evcS4VH/Z/XJdq1vrkd/dfj/S5t5Wd8XjSsNVz6uN7WPaT17zu3bmeuD18zfYNy7fjLzZfivh1p3bE2533OHdeX435+7rewX3Bu7PfUB4UPpQ/WH5I8NHVX/Y/rGvw73jRGdgZ+vjuMf3u7hdL5/kPfnSveAp9Wn5M5Nn1c+dnx/vCe65+mL8i+6XopcDvSV/avxZ+crm1eG//P9q7RvX1/1a/HrwzZK3+m93vnN919Qf3f/ofe77gQ+lH/U/7vrE+NTyOenzs4FpX0hf1n21/dr4Lfzbg8HcwUERR8yR/QpgsKLp6QC82QkANRkAGjyfUcbLz3+ygsjPrDIE/hOWnxFlxR2AWvj/HtML/25uA7B/Ozx+QX21CQBEUwGI9wSoi8twHTqryc6V0kKE54At7K9puWng3xT5mfOHuH9ugVTVFfzc/gtm0nx1Cds4jgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAZKADAAQAAAABAAAAZAAAAAAMc/x7AAACAUlEQVR4Ae3avU0DURBFYYxIaIKKqIBWiKEHGiAloRIqIp4ncayj5w1sjrPR3P3xt7PS29WePr5+7v7+vb18/928wc7r5zP8q3vo1VoEwlpAqAyLdJZeWAsIlWGRztILawGhMizSWXphLSBUhkU6S+9hqS9Y8mp459nguD3z32+y2Gd0wxocXITFPqMb1uDgIiz2Gd2wBgcXYbHP6IY1OLgIi31G92FnJT32dBMFazRZ4iKHFZYQENEmKywhIKJNVlhCQESbrLCEgIienh7fRfx/R7sNxfUPKywhIKJNVlhCQESbrLCEgIg2WWEJARE98CsaPgv+Eoa35TflvO1Ot9tQ6IUVlhAQ0SYrLCEgok1WWEJARJussISAiJ5ZwV/jOvu4c+42FJMVVlhCQESbrLCEgIg2WWEJARFtssISAiJ6ZgXPe+J34byS5m35uDt75m35uN2G7DO6YQ0OLsJin9ENa3BwERb7jG5Yg4OLsNhndMMaHFyExT6je+Y7+J317jjOlRT8XNFkicsYVlhCQESbrLCEgIg2WWEJARFtssISAiJ64Dt4PoudZwNeZx933G5Dth3dsAYHF2Gxz+iGNTi4CIt9RjeswcFFWOwzumENDi7CYp/R3VrBjz3JYmcVLg91sXiTJSjDCksIiGiTFZYQENEmKywhIKJNVlhCQER/AWcTLQH29Qp+AAAAAElFTkSuQmCC"/>
                            </defs>
                        </svg>
                    </span>
                    <span>محمد امین قربانی</span>
                    <span className="mx-2"> - {Gregorian_to_jalali(date)}</span>
                    <span> ساعت {PN.convertEnToPe(Qtime)} </span>
                </article>

                <article className="pr-4 mt-2 mb-4">{quest}</article>
            </section>

            <section className="w-full flex flex-col justify-start items-end bg-cyan-50">
                <article className="w-full flex flex-row-reverse justify-start items-center mt-4 mr-2">
                    <span className="ml-2">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <circle cx="20" cy="20" r="20" fill="url(#pattern1)"/>
                            <defs>
                                <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_0_4155" transform="translate(0 -0.00675676) scale(0.00337838)"/>
                                </pattern>
                                <image id="image0_0_4155" width="296" height="300" xlinkHref="data:image/png;base64,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"/>
                            </defs>
                        </svg>
                    </span>
                    <span>کیو جی پی تی</span>
                    <span className="mx-2"> - {Gregorian_to_jalali(date)}</span>
                    <span> ساعت {PN.convertEnToPe(Rtime)} </span>
                </article>
                {
                    resp ? 
                    <article className="pr-4 mt-4" dir="rtl">
                        {resp}
                    </article>
                     : 
                    <p className="pr-4 mt-2"> ...در حال نوشتن </p>
                }
            </section>
        </div>
    );
}