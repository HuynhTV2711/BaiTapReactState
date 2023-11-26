import React, { Component } from 'react'
import './BaiTapThayKinh.scss'

export default class BaiTapThayKinh extends Component {
    state = {
        mauKinh: '',
        name: '',
        desc: ''
    };
    render() {
        const arrButton = [
            {
                "id": 1,
                "price": 30,
                "name": "GUCCI G8850U",
                "url": "./image/v1.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 2,
                "price": 50,
                "name": "GUCCI G8759H",
                "url": "./image/v2.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 3,
                "price": 30,
                "name": "DIOR D6700HQ",
                "url": "./image/v3.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 4,
                "price": 70,
                "name": "DIOR D6005U",
                "url": "./image/v4.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 5,
                "price": 40,
                "name": "PRADA P8750",
                "url": "./image/v5.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 6,
                "price": 60,
                "name": "PRADA P9700",
                "url": "./image/v6.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 7,
                "price": 80,
                "name": "FENDI F8750",
                "url": "./image/v7.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 8,
                "price": 100,
                "name": "FENDI F8500",
                "url": "./image/v8.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 9,
                "price": 60,
                "name": "FENDI F4300",
                "url": "./image/v9.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            }
        ]
        return (
            <div>
                <header className='p-3 bg-secondary text-center'>TRY GLASSES APP ONLINE</header>
                <div className="container">
                    <div className="model_container row mb-5 mx-auto">

                        <div className="model_mau col-3 mt-5">
                            <img src="./image/model.jpg" alt="" width={300} />
                            <img src={`${this.state.mauKinh}`} alt="" className='img_kinh' />
                            <div className="thong_tin_kinh">
                                <h4>{this.state.name}</h4>
                                <p>{this.state.desc}</p>
                            </div>
                        </div>
                        <div className="col-5"></div>
                        <div className="model_thu_kinh col-3 mt-5">
                            <img src="./image/model.jpg" alt="" width={300} />
                            <img src={`${this.state.mauKinh}`} alt="" className='img_kinh' />
                        </div>
                    </div>
                    <div className="list-btn mx-auto">
                        {arrButton.map((item, index) => {
                            return (
                                <button
                                className='me-2'
                                    onClick={() => {
                                        this.setState({
                                            mauKinh: item.url,
                                            name: item.name,
                                            desc: item.desc
                                          });
                                    }}
                                    key={index}
                                    style={{

                                    }}
                                >
                                    <img src={item.url} alt="" height={50} width={100} />
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
