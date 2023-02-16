import React from "react"
import './According.css';
import { useState } from "react";
// @notus-pro/react

function According() {

    const [select, SetSelect] = useState(null)
    const toggle = (i) => {
        if (select === i) {
            return SetSelect(null)
        }
        SetSelect(i)
    }
    return (
        <div className="wrapper">
            <div className="accordion">
                {data.map((item, i) => (
                    
                    <div className="item">
                        <div className="title" onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{select === i ? "-" : "+"}</span>
                        </div>
                        <div className={
                            select === i ? "content.show" : "content"
                        }
                        >
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>


        </div>


    )

}
const data = [
    {
        question: "Pertanyaan 1",
        answer:
            "hsajkdhasj kdhjkashdjkha skdjhasjk dhkasjkdasjkdhjka shdhasj kdkasdkasjkdh kashddkasd kadhkjhsaj kdhasjk dhjkashdjkhaskd jhasjk dhkasjkdasjkd hjkashdhas jkdkasdk asjkdhkashdd kasdkadhk jhsajkdhasjkdh jkashdjkh askdjhas jkdhkasj kdasj kdhjkashd hasjkdkasd kasjk dhkashd dkasdkadhkjhsaj kdhasjkd hjkashd jkhaskd jhasjkdhkas jkdasjkdh jkashdhas jkdkasdk asjkdhk ashddkas dka dhkjhsajkdhasj kdhjkashdj khaskdjhasjkd hkasjkdasjkdh jkashdh kashddkasdkadhkj",
    },
    {
        question: "Pertanyaan 2",
        answer:
            "hsajkdhasj kdhjkashdjkha skdjhasjk dhkasjkdasjkdhjka shdhasj kdkasdkasjkdh kashddkasd kadhkjhsaj kdhasjk dhjkashdjkhaskd jhasjk dhkasjkdasjkd hjkashdhas jkdkasdk asjkdhkashdd kasdkadhk jhsajkdhasjkdh jkashdjkh askdjhas jkdhkasj kdasj kdhjkashd hasjkdkasd kasjk dhkashd dkasdkadhkjhsaj kdhasjkd hjkashd jkhaskd jhasjkdhkas jkdasjkdh jkashdhas jkdkasdk asjkdhk ashddkas dka dhkjhsajkdhasj kdhjkashdj khaskdjhasjkd hkasjkdasjkdh jkashdh kashddkasdkadhkj",
    },
    {
        question: "Pertanyaan 3",
        answer:
            "hsajkdhasj kdhjkashdjkha skdjhasjk dhkasjkdasjkdhjka shdhasj kdkasdkasjkdh kashddkasd kadhkjhsaj kdhasjk dhjkashdjkhaskd jhasjk dhkasjkdasjkd hjkashdhas jkdkasdk asjkdhkashdd kasdkadhk jhsajkdhasjkdh jkashdjkh askdjhas jkdhkasj kdasj kdhjkashd hasjkdkasd kasjk dhkashd dkasdkadhkjhsaj kdhasjkd hjkashd jkhaskd jhasjkdhkas jkdasjkdh jkashdhas jkdkasdk asjkdhk ashddkas dka dhkjhsajkdhasj kdhjkashdj khaskdjhasjkd hkasjkdasjkdh jkashdh kashddkasdkadhkj",
    },
    {
        question: "Pertanyaan 4",
        answer:
            "hsajkdhasj kdhjkashdjkha skdjhasjk dhkasjkdasjkdhjka shdhasj kdkasdkasjkdh kashddkasd kadhkjhsaj kdhasjk dhjkashdjkhaskd jhasjk dhkasjkdasjkd hjkashdhas jkdkasdk asjkdhkashdd kasdkadhk jhsajkdhasjkdh jkashdjkh askdjhas jkdhkasj kdasj kdhjkashd hasjkdkasd kasjk dhkashd dkasdkadhkjhsaj kdhasjkd hjkashd jkhaskd jhasjkdhkas jkdasjkdh jkashdhas jkdkasdk asjkdhk ashddkas dka dhkjhsajkdhasj kdhjkashdj khaskdjhasjkd hkasjkdasjkdh jkashdh kashddkasdkadhkj",
    },
    {
        question: "Pertanyaan 5",
        answer:
            "hsajkdhasj kdhjkashdjkha skdjhasjk dhkasjkdasjkdhjka shdhasj kdkasdkasjkdh kashddkasd kadhkjhsaj kdhasjk dhjkashdjkhaskd jhasjk dhkasjkdasjkd hjkashdhas jkdkasdk asjkdhkashdd kasdkadhk jhsajkdhasjkdh jkashdjkh askdjhas jkdhkasj kdasj kdhjkashd hasjkdkasd kasjk dhkashd dkasdkadhkjhsaj kdhasjkd hjkashd jkhaskd jhasjkdhkas jkdasjkdh jkashdhas jkdkasdk asjkdhk ashddkas dka dhkjhsajkdhasj kdhjkashdj khaskdjhasjkd hkasjkdasjkdh jkashdh kashddkasdkadhkj",
    },

]
export default According