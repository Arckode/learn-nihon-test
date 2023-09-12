// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useNavigate } from "react-router-dom";

function Katakana() {

    const katakanas = [
        {
            id: 1,
            name: "A to O",
            details: [
                { katakana: "ア", romanji: "a" },
                { katakana: "イ", romanji: "i" },
                { katakana: "ウ", romanji: "u" },
                { katakana: "エ", romanji: "e" },
                { katakana: "オ", romanji: "o" },
            ],
        },
        {
            id: 2,
            name: "KA to KO",
            details: [
                { katakana: "カ", romanji: "ka" },
                { katakana: "キ", romanji: "ki" },
                { katakana: "ク", romanji: "ku" },
                { katakana: "ケ", romanji: "ke" },
                { katakana: "コ", romanji: "ko" },
            ],
        },
        {
            id: 3,
            name: "SA to SO",
            details: [
                { katakana: "サ", romanji: "sa" },
                { katakana: "シ", romanji: "shi" },
                { katakana: "ス", romanji: "su" },
                { katakana: "セ", romanji: "se" },
                { katakana: "ソ", romanji: "so" },
            ],
        },
        {
            id: 4,
            name: "TA to TO",
            details: [
                { katakana: "タ", romanji: "ta" },
                { katakana: "チ", romanji: "chi" },
                { katakana: "ツ", romanji: "tsu" },
                { katakana: "テ", romanji: "te" },
                { katakana: "ト", romanji: "to" },
            ],
        },
        {
            id: 5,
            name: "NA to NO",
            details: [
                { katakana: "ナ", romanji: "na" },
                { katakana: "ニ", romanji: "ni" },
                { katakana: "ヌ", romanji: "nu" },
                { katakana: "ネ", romanji: "ne" },
                { katakana: "ノ", romanji: "no" },
            ],
        },
        {
            id: 6,
            name: "HA to HO",
            details: [
                { katakana: "ハ", romanji: "ha" },
                { katakana: "ヒ", romanji: "hi" },
                { katakana: "フ", romanji: "fu" },
                { katakana: "ヘ", romanji: "he" },
                { katakana: "ホ", romanji: "ho" },
            ],
        },
        {
            id: 7,
            name: "MA to MI",
            details: [
                { katakana: "マ", romanji: "ma" },
                { katakana: "ミ", romanji: "mi" },
                { katakana: "ム", romanji: "mu" },
                { katakana: "メ", romanji: "me" },
                { katakana: "モ", romanji: "mo" },
            ],
        },
        {
            id: 8,
            name: "YA to YO",
            details: [
                { katakana: "ヤ", romanji: "ya" },
                { katakana: "ユ", romanji: "yu" },
                { katakana: "ヨ", romanji: "yo" },
            ],
        },
        {
            id: 9,
            name: "RA to RO",
            details: [
                { katakana: "ラ", romanji: "ra" },
                { katakana: "リ", romanji: "ri" },
                { katakana: "ル", romanji: "ru" },
                { katakana: "レ", romanji: "re" },
                { katakana: "ロ", romanji: "ro" },
            ],
        },
        {
            id: 10,
            name: "WA to N",
            details: [
                { katakana: "ワ", romanji: "wa" },
                { katakana: "ヲ", romanji: "wo" },
                { katakana: "ン", romanji: "n" },
            ],
        },
    ]

    const navigate = useNavigate();

    const katakanaTest = (katakana) => {
        navigate("/katakanaTest", { state: katakana });
    };

    return (
        <>
            <div className=" max-h-screen">
                <h6 className="flex justify-center pt-20 pb-14 text-4xl">
                    Katakana Table
                </h6>
                <div className="flex justify-center items-start max-h-[25rem] overflow-scroll">
                    {/* Katakana */}
                    <div className="flex-1 max-w-5xl p-16 pt-0">
                        {katakanas.map((katakana) => {
                            return (
                                <div className="text-sm pb-5" key={katakana.id}>
                                    <h6 className="text-center pb-3">{katakana.name}</h6>
                                    <div className="flex flex-row justify-center items-center pb-5">
                                        <div className="grid grid-cols-5 grid-rows-1 gap-4 grid-flow-row-dense w-fit">
                                            {katakana.details.map((character) => (
                                                <div
                                                    className="p-5 bg-white dark:bg-slate-700 border-1-8 border-transparent rounded-md shadow-md space-y-2 flex flex-col items-center"
                                                    key={character.romanji}
                                                >
                                                    <h6 className="text-3xl font-semibold">
                                                        {character.katakana}
                                                    </h6>
                                                    <p className="text-xs uppercase">
                                                        {character.romanji}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        <a className="p-5 pl-10"
                                            onClick={() => {
                                                katakanaTest(katakana);
                                            }}
                                        >
                                            <button>Test</button>
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Katakana
