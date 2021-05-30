import React, { useState } from 'react';
import { Avatar, Button, Input } from '@material-ui/core';
import { AssignmentTurnedInOutlined, ExpandMore, FeaturedPlayListOutlined, Home, LanguageOutlined, Link, NotificationsOutlined, PeopleAltOutlined, PeopleOutlineTwoTone, SearchOutlined } from '@material-ui/icons';
import './Navbar.css';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux/userSlice';
import firebase from 'firebase/app';
import db from '../Auth/Firebase/FirebaseConfig';
import logo from '../../images/logo.png';

const Navbar = () => {
    const user = useSelector(selectUser);

    const [IsmodalOpen, setIsModalOpen] = useState(false);
    const [input, setInput] = useState("");
    const [inputUrl, setInputUrl] = useState("");
    const questionName = input;

    const handleQuestion = (e) => {
        e.preventDefault();
        setIsModalOpen(false);

        if (questionName) {
            db.collection("questions").add({
                user: user,
                question: input,
                imageUrl: inputUrl,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
        }

        setInput("");
        setInputUrl("");
    };

    return (
        <div className="q_header">
            <div className="q_header_logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="q_header_icons">
                <div className="q_header_icon">
                    <Home />
                </div>
                <div className="q_header_icon">
                    <FeaturedPlayListOutlined />
                </div>
                <div className="q_header_icon">
                    <AssignmentTurnedInOutlined />
                </div>
                <div className="q_header_icon">
                    <PeopleOutlineTwoTone />
                </div>
                <div className="q_header_icon">
                    <NotificationsOutlined />
                </div>
            </div>
            <div className="q_header_input">
                <SearchOutlined />
                <input type="text" placeholder="Search Questly..." />
            </div>
            <div className="q_header_rem">
                <div className="q_header_avatar">
                    <Avatar />
                </div>
                <LanguageOutlined />
                <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
                <Modal
                    isOpen={IsmodalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    shouldCloseOnOverlayClick={false}
                    style={{
                        overlay: {
                            width: 700,
                            height: 600,
                            backgroundColor: "rgba(0,0,0,0.8)",
                            zIndex: "1000",
                            top: "50%",
                            left: "50%",
                            marginTop: "-300px",
                            marginLeft: "-350px",
                        },
                    }}
                >
                    <div className="modal__title">
                        <h5>Add Question</h5>
                        <h5>Share Link</h5>
                    </div>
                    <div className="modal__info">
                        <Avatar
                            className="avatar"
                            src={
                                user.photo
                                    ? user.photo
                                    : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
                            }
                        />
                        <p>{user.disPlayName ? user.disPlayName : user.email} asked</p>
                        <div className="modal__scope">
                            <PeopleAltOutlined />
                            <p>Public</p>
                            <ExpandMore />
                        </div>
                    </div>
                    <div className="modal__Field">
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                            placeholder="Start your question with 'What', 'How', 'Why', etc. "
                        />
                        <div className="modal__fieldLink">
                            <Link />
                            <input
                                value={inputUrl}
                                onChange={(e) => setInputUrl(e.target.value)}
                                type="text"
                                placeholder="Optional: inclue a link that gives context"
                            ></input>
                        </div>
                    </div>
                    <div className="modal__buttons">
                        <button className="cancle" onClick={() => setIsModalOpen(false)}>
                            Cancel
                        </button>
                        <button type="sumbit" onClick={handleQuestion} className="add">
                            Add Question
                        </button>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default Navbar;
