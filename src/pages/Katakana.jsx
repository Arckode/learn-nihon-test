// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function Katakana() {

    const katakana = [
        {
            id: 1,
            name: "A to O",
            details: [
                { katakana: "ア", hiragana: "a" },
                { katakana: "イ", hiragana: "i" },
                { katakana: "ウ", hiragana: "u" },
                { katakana: "エ", hiragana: "e" },
                { katakana: "オ", hiragana: "o" },
            ],
        },
        {
            id: 2,
            name: "KA to KO",
            details: [
                { katakana: "カ", hiragana: "ka" },
                { katakana: "キ", hiragana: "ki" },
                { katakana: "ク", hiragana: "ku" },
                { katakana: "ケ", hiragana: "ke" },
                { katakana: "コ", hiragana: "ko" },
            ],
        },
        {
            id: 3,
            name: "SA to SO",
            details: [
                { katakana: "サ", hiragana: "sa" },
                { katakana: "シ", hiragana: "shi" },
                { katakana: "ス", hiragana: "su" },
                { katakana: "セ", hiragana: "se" },
                { katakana: "ソ", hiragana: "so" },
            ],
        },
        {
            id: 4,
            name: "TA to TO",
            details: [
                { katakana: "タ", hiragana: "ta" },
                { katakana: "チ", hiragana: "chi" },
                { katakana: "ツ", hiragana: "tsu" },
                { katakana: "テ", hiragana: "te" },
                { katakana: "ト", hiragana: "to" },
            ],
        },
        {
            id: 5,
            name: "NA to NO",
            details: [
                { katakana: "ナ", hiragana: "na" },
                { katakana: "ニ", hiragana: "ni" },
                { katakana: "ヌ", hiragana: "nu" },
                { katakana: "ネ", hiragana: "ne" },
                { katakana: "ノ", hiragana: "no" },
            ],
        },
        {
            id: 6,
            name: "HA to HO",
            details: [
                { katakana: "ハ", hiragana: "ha" },
                { katakana: "ヒ", hiragana: "hi" },
                { katakana: "フ", hiragana: "fu" },
                { katakana: "ヘ", hiragana: "he" },
                { katakana: "ホ", hiragana: "ho" },
            ],
        },
        {
            id: 7,
            name: "MA to MI",
            details: [
                { katakana: "マ", hiragana: "ma" },
                { katakana: "ミ", hiragana: "mi" },
                { katakana: "ム", hiragana: "mu" },
                { katakana: "メ", hiragana: "me" },
                { katakana: "モ", hiragana: "mo" },
            ],
        },
        {
            id: 8,
            name: "YA to YO",
            details: [
                { katakana: "ヤ", hiragana: "ya" },
                { katakana: "ユ", hiragana: "yu" },
                { katakana: "ヨ", hiragana: "yo" },
            ],
        },
        {
            id: 9,
            name: "RA to RO",
            details: [
                { katakana: "ラ", hiragana: "ra" },
                { katakana: "リ", hiragana: "ri" },
                { katakana: "ル", hiragana: "ru" },
                { katakana: "レ", hiragana: "re" },
                { katakana: "ロ", hiragana: "ro" },
            ],
        },
        {
            id: 10,
            name: "WA to N",
            details: [
                { katakana: "ワ", hiragana: "wa" },
                { katakana: "ヲ", hiragana: "wo" },
                { katakana: "ン", hiragana: "n" },
            ],
        },
    ]
    return (
        <>
            <div>
                Katakana
            </div>
        </>
    )
}

export default Katakana
