import React,{useState,useEffect} from "react";
import "./styles.css";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

export default function Modal() {
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);

    const openModal = () => {
        setModal(!modal);
    };

    // const spinner = () => {
    //     setVideoLoading(!videoLoading);
    // };

    return (
        <div className="App">
            <button onClick={openModal} className="">
                Click Me!
                {modal ? (
                    <section className="modal__bg">
                        <div className="modal__align">
                            <div className="modal__content"  modal="true">
                                <IoCloseOutline
                                    className="modal__close"
                                    arial-label="Close modal"
                                    onClick={setModal}
                                />
                                <div className="modal__video-align">

                                    <div className="h_iframe-aparat_embed_frame">
                                        <span
                                        style={{display: 'block'}}></span>
                                        <iframe src="https://www.aparat.com/video/video/embed/videohash/zk3XD/vt/frame"
                                                allowFullScreen={true} webkitallowfullscreen="true"
                                                mozallowfullscreen="true"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null}
            </button>
        </div>
    );
}