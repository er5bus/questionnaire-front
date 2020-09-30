import React from 'react';
import { connect } from "react-redux";
import { nextSelectedFromBodyQuestions, selectDiselectPartBody } from '../actions';
import { HUMAN_BODY } from "../constants";
class HumanBodyBackSide extends React.Component {

  selectDiselectFromBody = (bodypart) => {
    this.props.selectDiselectPartBody(bodypart);
  }

  render() {
    const { selectedPartBody, nextBodyArea } = this.props

    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" style={{
        height: 400
      }}>
        <defs><style>{".cls-1{fill:#dee1e0;}.cls-2{fill:none;}.cls-3{fill:#84c7d1;"}</style></defs>
        <g id="Layer_2" data-name="Layer 2" style={{ cursor: "pointer" }}>
          <path className="cls-1" d="M177.68,221.21l-.26.33c-.07-.27-.08-.47.29-.28Z" />
          <path className="cls-1" d="M236.88,67a114.54,114.54,0,0,1,8.58-8c4.07-3.16,8.24-2.89,11.84.36a30.79,30.79,0,0,1,4,4.31c2,2.6,3.74,5.36,5.83,8.39.14-1.56.17-2.77.4-3.94a6.63,6.63,0,0,1,.91-1.72,18.19,18.19,0,0,1,1,1.63,4.63,4.63,0,0,1,.19,1.18,4.9,4.9,0,0,0,4.4-2.73c1.67-2.86,1.33-5.82.41-8.77A2.22,2.22,0,0,0,271.51,56c-1.49.37-1.84-.28-1.78-1.73a60.89,60.89,0,0,0,0-7.47c-.67-8.3-5-13.75-12.38-15.71a25.52,25.52,0,0,0-12.84,0c-5.92,1.48-9.87,5.28-11.61,11.44a27.73,27.73,0,0,0-.76,11.38c.27,2-.05,2.37-1.87,2.1a2.35,2.35,0,0,0-2.83,1.82,11.1,11.1,0,0,0,.51,8.66,4.33,4.33,0,0,0,4.36,2.7,4.36,4.36,0,0,1,0-1.38,9.5,9.5,0,0,1,.92-1.51,9.3,9.3,0,0,1,1.18,1.44,6.22,6.22,0,0,1,.31,1.68C235.63,68.43,236.2,67.65,236.88,67Z" />
          <path className="cls-1" d="M236.88,67a114.54,114.54,0,0,1,8.58-8c4.07-3.16,8.24-2.89,11.84.36a30.79,30.79,0,0,1,4,4.31c2,2.6,3.74,5.36,5.83,8.39.14-1.56.17-2.77.4-3.94a6.63,6.63,0,0,1,.91-1.72,18.19,18.19,0,0,1,1,1.63,4.63,4.63,0,0,1,.19,1.18,4.9,4.9,0,0,0,4.4-2.73c1.67-2.86,1.33-5.82.41-8.77A2.22,2.22,0,0,0,271.51,56c-1.49.37-1.84-.28-1.78-1.73a60.89,60.89,0,0,0,0-7.47c-.67-8.3-5-13.75-12.38-15.71a25.52,25.52,0,0,0-12.84,0c-5.92,1.48-9.87,5.28-11.61,11.44a27.73,27.73,0,0,0-.76,11.38c.27,2-.05,2.37-1.87,2.1a2.35,2.35,0,0,0-2.83,1.82,11.1,11.1,0,0,0,.51,8.66,4.33,4.33,0,0,0,4.36,2.7,4.36,4.36,0,0,1,0-1.38,9.5,9.5,0,0,1,.92-1.51,9.3,9.3,0,0,1,1.18,1.44,6.22,6.22,0,0,1,.31,1.68C235.63,68.43,236.2,67.65,236.88,67Z" />
          <path className="cls-1" d="M242.8,61.2c-1.76,1.64-3.45,3.38-5.19,5-.2.19-.38.39-.57.6,1.93-1.85,3.8-3.79,5.78-5.59Z" />
          <path className="cls-1" d="M259,61l.06.06L259,61Z" />
          <path d="M343.65,258.31c.63-.63.61-2.18.54-3.3a6.31,6.31,0,0,0-1-2.68c-4.14-6.84-8.42-13.56-15.25-17.94a5.34,5.34,0,0,1-2.69-4q-1.07-10-2.16-20.09c-.52-4.76-.58-9.65-1.71-14.25-1.84-7.48-4.39-14.77-6.63-22.15a22.49,22.49,0,0,1-1.06-3.83c-.65-5.6-1.09-11.23-1.79-16.83-1.22-9.68-2.36-19.38-3.92-29-2-12.43-8.29-21.4-20.23-25.42-5-1.67-9.9-3.45-14.75-5.44-3.62-1.48-6.89-3.64-8.55-7.59a6.12,6.12,0,0,1,.52-6.33c1.67-2.4,3.07-5,4.61-7.56,1.44-.8,3.17-1.6,4.73-2.66,3-2.06,3.58-10.56,1.49-13.25A5.38,5.38,0,0,0,273.21,54c-1.16-.3-1.3-.81-1.31-1.86a52.44,52.44,0,0,0-.39-7.63c-1.17-7.07-4.7-12.33-11.42-14.77a27.1,27.1,0,0,0-17.18-.37c-5.88,1.71-9.74,5.72-11.68,11.73A30.35,30.35,0,0,0,230,53.66a4.91,4.91,0,0,0-4.38,3.1c-2.81,6.68.26,13.3,6.88,14.9a6.14,6.14,0,0,0,.41,2.07c1.3,2.07,2.67,4.1,4.14,6a4,4,0,0,1,.6,3.91c-1.27,4.27-4.29,7-8,8.63a125.12,125.12,0,0,1-13.3,5.53c-11.07,3.63-18.54,10.87-20.89,22.88-1.74,8.89-2.82,17.78-4.12,26.77-.58,4-1.68,8.12-2.19,12.15-.11.85-.75,9.58-1.63,12.87-2,7.54-5,14.83-6.78,22.41-1.32,5.49-1.46,11.28-2.11,16.94-.72,6.27-1.35,12.54-2.18,18.79a4.66,4.66,0,0,1-1.72,2.93c-6.79,4.58-11.5,11.07-15.63,18.1a11.68,11.68,0,0,0-1.52,4c-.43,2.8,1.55,4.35,4.13,3.36a34.18,34.18,0,0,0,3.35-1.75c-.77,2-1.54,3.84-2.14,5.69a64.28,64.28,0,0,0-2,7.14,3.14,3.14,0,0,0,.8,2.67,3.4,3.4,0,0,0,2.82-.35,9,9,0,0,0,2.17-2.32c.63-.78,1.91-3,2.39-3.64,0,2.07-.9,5.53-.68,7.6s2,2.84,3.63,1.34a28,28,0,0,0,2.58-3.1c.54,1.29,0,3.48,2.09,3.59,2.6.15,2.68-2.58,3.87-4.14a2.55,2.55,0,0,1,.38.6c.34,1.18.92,2.4,2.19,2.13a4,4,0,0,0,2.51-1.87,17.06,17.06,0,0,0,1.63-5.14,84.07,84.07,0,0,1,3.16-14.68,17.45,17.45,0,0,0,.73-9.68c-.85-3.61,0-7,1.34-10.27,2.09-5,4.18-10,6.22-15a86.81,86.81,0,0,0,6.53-25.49,37.12,37.12,0,0,1,1.12-7.53c2.06-6.88,4.39-13.67,6.62-20.49.17-.53.43-1,.64-1.53a52.91,52.91,0,0,1,1.13,6.77c1,7.74.89,15.39-1.61,22.84a63.22,63.22,0,0,0-3.53,18.81c-.14,6.12-.69,12.23-1.31,18.32-.47,4.57-1.66,9.08-2,13.66a117.4,117.4,0,0,0,0,16.19c.6,8.22,1.55,16.42,2.61,24.6.66,5.09,1.51,10.16,2.34,15.23.33,2,.66,4.08,1,6.12a27.54,27.54,0,0,1,.19,2.76,13.81,13.81,0,0,0,.15,1.59c.18,1.1.8,2.12,1,3.22.94,4.67,1.83,9.35,2.75,14q.65,3.32,1.32,6.64c.21,1,.42,2.07.61,3.11a45.26,45.26,0,0,1,.86,13.49,97.92,97.92,0,0,0,1.69,32.24c2.25,10.27,5,20.42,7.27,30.67a32.92,32.92,0,0,1,1,10.23c-.82,8.11-3.47,15.78-6.22,23.39-1.31,3.62-2.71,7.22-3.78,10.91a6.08,6.08,0,0,0,1.77,6.73c1.38,1.24,2.48,2.4,4.48,2.73s3.73,1.67,5.63,2.46a7.94,7.94,0,0,0,2.22.3,6.67,6.67,0,0,1,1.54.1c3.52,1.25,5.6.16,6.49-3.62.36-1.51.17-3.2.67-4.64a22.11,22.11,0,0,0,1.18-8.21c-.11-3-.23-6.08-.26-9.12,0-3.66,1.21-7,2.6-10.28a15.42,15.42,0,0,0,.86-10.43,27.88,27.88,0,0,1-1.08-7.85c.21-8,.74-16,1.13-24.06.23-4.56.57-9.11.63-13.67.08-6.56.13-13.13-.17-19.68-.34-7.28-1.37-14.52-1.56-21.8-.14-5.38.54-10.78.93-16.16.43-5.94,1-11.86,1.43-17.8.27-3.45.55-6.91.7-10.37q.45-10.49.73-21c0-1.36.71-1.44,1.69-1.42s1.77-.07,1.84,1.44c.52,11,1,22,1.72,33,.45,7.21.94,14.43,1.82,21.6,1,8.48,0,16.88-.34,25.3-.27,6.24-1.32,12.45-1.4,18.68-.08,6.66.57,13.33.91,20q.65,12.67,1.33,25.33a16.52,16.52,0,0,1-.61,6.79,15.13,15.13,0,0,0,.39,12.47c2.48,5,2.67,10.2,2.29,15.61a45.79,45.79,0,0,0,.18,8,76.59,76.59,0,0,0,1.48,8c.64,3,2.06,4.51,4.31,4.42a23.43,23.43,0,0,0,5.79-.82,50.13,50.13,0,0,0,5.8-2.55,3.39,3.39,0,0,1,.83-.22c2.26-.37,5.11-3.19,5.62-5.51.63-2.91-.5-5.48-1.37-8.1-2.43-7.32-5-14.58-7.23-22-1-3.32-2.05-7-1.68-10.32.7-6.33,2.33-12.55,3.74-18.78,1.36-6,3.1-11.89,4.35-17.9a111.41,111.41,0,0,0,2.18-14.53c.39-5.25.27-10.56.14-15.83-.11-4.66-.94-9.29.06-14l.54-2.56q.74-3.54,1.45-7.08c.56-2.83,1.09-5.67,1.58-8.51q1-6.08,2.08-12.15.88-5.16,1.73-10.33c1-6.24,2-12.48,2.91-18.74,1.24-8.7,1.89-17.5,2.48-26.28a77.75,77.75,0,0,0-1.37-19.41c-1.34-7.21-2.44-14.45-2.18-21.85a49.52,49.52,0,0,0-3-18.75c-3.44-9.47-3.2-19.1-1.71-28.85.13-.88.28-1.76.41-2.63h.47c1.08,3.55,2.07,7.14,3.26,10.66,2.36,7,4.69,13.87,5.25,21.38a56.72,56.72,0,0,0,3,13.91c2.59,7.57,5.75,14.93,8.71,22.37,1.41,3.54,2.93,7.07,2.14,11-.91,4.58-.12,8.9,1.34,13.21a54,54,0,0,1,1.49,6.12c.74,3.48,1.32,7,2.16,10.44.33,1.33,1.17,2.65,2.77,2.65s2.09-1.3,2.51-2.62c0,0,.16,0,.25-.06a20,20,0,0,0,1.86,3.24,2.66,2.66,0,0,0,2.1.84c.55-.08,1.1-.92,1.45-1.55a9.52,9.52,0,0,0,.56-2.19c.46.72.73,1.19,1,1.62a7.7,7.7,0,0,0,1.27,1.47,2.26,2.26,0,0,0,3.95-1.78c.11-1.86-1-5.87-1.08-7.81,1.48,1.7,3.6,5.48,5.09,6.87a2.55,2.55,0,0,0,2.4.35,2.66,2.66,0,0,0,1-2.24,65.82,65.82,0,0,0-1.82-7.36c-.58-1.94-1.39-3.8-2.18-5.93,1.33.68,2.33,1.51,3.4,1.64A4.41,4.41,0,0,0,343.65,258.31Z" />
          <path onClick={() => this.selectDiselectFromBody(HUMAN_BODY.LEG_FOOT)} className={`cls-1 ${selectedPartBody.includes(HUMAN_BODY.LEG_FOOT.value) ? "active-body" : "normal-body"}`} d="M227.43,464.75c.13-.54.72-2.4,1-3.23l2,.72c-.2.65-.78,2.46-1,3A1,1,0,0,1,227.43,464.75Z" />
          <path onClick={() => this.selectDiselectFromBody(HUMAN_BODY.LEG_FOOT)} className={`cls-1 ${selectedPartBody.includes(HUMAN_BODY.LEG_FOOT.value) ? "active-body" : "normal-body"}`} d="M230.84,466.08c.15-.6.81-2.68,1.09-3.6l2.19.82c-.22.72-.88,2.74-1.08,3.4A1.14,1.14,0,0,1,230.84,466.08Z" />
          <path onClick={() => this.selectDiselectFromBody(HUMAN_BODY.LEG_FOOT)} className={`cls-1 ${selectedPartBody.includes(HUMAN_BODY.LEG_FOOT.value) ? "active-body" : "normal-body"}`} d="M224,462.91c.15-.53.62-1.79.89-2.6l1.94.79c-.22.64-.68,1.84-.88,2.42A1,1,0,0,1,224,462.91Z" />
          <path onClick={() => this.selectDiselectFromBody(HUMAN_BODY.LEG_FOOT)} className={`cls-1 ${selectedPartBody.includes(HUMAN_BODY.LEG_FOOT.value) ? "active-body" : "normal-body"}`} d="M221.25,461.23c.13-.54.33-1.17.57-2l2,.7c-.19.65-.39,1.22-.57,1.81A1,1,0,0,1,221.25,461.23Z" />
          <path onClick={() => this.selectDiselectFromBody(HUMAN_BODY.LEG_FOOT)} className={`cls-1 ${selectedPartBody.includes(HUMAN_BODY.LEG_FOOT.value) ? "active-body" : "normal-body"}`} d="M272.25,465.11c-.13-.6-.55-2.45-.69-3.11l2-.55c.18.84.6,2.76.68,3.3A1,1,0,0,1,272.25,465.11Z" />
          <path className="cls-1" d="M268.51,466.2c-.15-.67-.63-2.74-.79-3.48l2.25-.63c.2.94.68,3.07.78,3.68A1.14,1.14,0,0,1,268.51,466.2Z" />
          <path onClick={() => this.selectDiselectFromBody(HUMAN_BODY.LEG_FOOT)} className={`cls-1 ${selectedPartBody.includes(HUMAN_BODY.LEG_FOOT.value) ? "active-body" : "normal-body"}`} d="M275.84,463.64c-.15-.6-.51-1.83-.67-2.48l2-.62c.2.84.56,2.13.67,2.67A1,1,0,0,1,275.84,463.64Z" />
          <path onClick={() => this.selectDiselectFromBody(HUMAN_BODY.LEG_FOOT)} className={`cls-1 ${selectedPartBody.includes(HUMAN_BODY.LEG_FOOT.value) ? "active-body" : "normal-body"}`} d="M278.7,462.11c-.12-.6-.27-1.19-.41-1.85l2-.53c.17.85.32,1.49.4,2A1,1,0,0,1,278.7,462.11Z" />
          <path onClick={() => this.selectDiselectFromBody(HUMAN_BODY.SHOULDERS)} className={`cls-1 ${selectedPartBody.includes(HUMAN_BODY.SHOULDERS.value) ? "active-body" : "normal-body"}`} d="M289.82,150.79c1.67-6.57,2.72-13.31,4-20l-1.9-1.11c-.58,2.16-1,4.36-1.58,7l-18.09-36.33c2-.84,3.83-1.63,5.69-2.41a1,1,0,0,1,.67,0c5.37,1.83,10.88,3.28,15.71,6.54,6.39,4.32,9.91,10.74,11.15,18.26,2,11.8,3.33,23.7,4.94,35.56a9.45,9.45,0,0,1,0,1.17c-10.68,1.48-10,.92-18.47,8.15C290.22,162.06,288.29,156.82,289.82,150.79Z" />
          <path onClick={() => this.selectDiselectFromBody(HUMAN_BODY.ELBOW_WIRST_HAND)} className={`cls-1 ${selectedPartBody.includes(HUMAN_BODY.ELBOW_WIRST_HAND.value) ? "active-body" : "normal-body"}`} d="M332.4,250.35c-1.31.95,4.15,12.6,6,17.4.35.93,1,2.37.26,2.56-2.93.73-5.33-8.12-7.18-11.22-1.58-2.64-3.19-1.6-3-.91.78,3.24,1.78,6.43,2.51,9.68.43,1.91,1.91,5.54.49,6.16-.74.32-1.68-1.58-2-2.5-1.27-3.39-2.42-6.83-3.6-10.26-.16-.46-.1-1-.39-1.39-1-1.14-2,.31-2,.51.34,2.53.92,5,1.27,7.54.25,1.78,1.8,4.92,0,5.3-3.16.67-3.17-8.7-4.31-12.2-.1-.32-1.55-1.09-1.83.39-.47,2.51.37,5.1.82,7.61.7,3.93-1.7,2.35-1.9,1.74a20.32,20.32,0,0,1-1-4,66.86,66.86,0,0,0-3-14,18.9,18.9,0,0,1-.67-9.87c1-5.06-1.07-9.53-2.92-14-2.51-6.09-5.06-12.17-7.37-18.34-2.86-7.61-3.72-15.67-4.56-23.73a12.73,12.73,0,0,0-.56-2.65c-1.46-4.42-3.38-10.25-4.8-14.46,4.75-5.73,10.41-8.95,17.87-8.36a76,76,0,0,0,1.13,8.23,74.58,74.58,0,0,0,2.92,9.7,108,108,0,0,1,6.54,31.24c.45,6.43,1.37,12.82,2,19.23a8.41,8.41,0,0,0,3.95,6.7c6.43,4.11,10.38,10.54,14.34,16.94a3.25,3.25,0,0,1,.66,2.64c-.13.74-1.55.87-2,.67C337.84,255.77,333.74,249.38,332.4,250.35Z" />
          <path onClick={() => this.selectDiselectFromBody(HUMAN_BODY.ELBOW_WIRST_HAND)} className={`cls-1 ${selectedPartBody.includes(HUMAN_BODY.ELBOW_WIRST_HAND.value) ? "active-body" : "normal-body"}`} d="M169.46,250.35c1.31.95-4.15,12.6-6,17.4-.35.93-1,2.37-.26,2.56,2.93.73,5.33-8.12,7.18-11.22,1.58-2.64,3.19-1.6,3-.91-.78,3.24-1.78,6.43-2.51,9.68-.43,1.91-1.91,5.54-.49,6.16.74.32,1.68-1.58,2-2.5,1.27-3.39,2.42-6.83,3.6-10.26.16-.46.1-1,.39-1.39,1-1.14,2,.31,2,.51-.34,2.53-.92,5-1.27,7.54-.25,1.78-1.8,4.92,0,5.3,3.16.67,3.17-8.7,4.31-12.2.1-.32,1.55-1.09,1.83.39.47,2.51-.37,5.1-.82,7.61-.7,3.93,1.7,2.35,1.9,1.74a20.32,20.32,0,0,0,1-4,66.86,66.86,0,0,1,3-14,18.9,18.9,0,0,0,.67-9.87c-1-5.06,1.07-9.53,2.92-14,2.51-6.09,5.06-12.17,7.37-18.34,2.86-7.61,3.72-15.67,4.56-23.73a12.73,12.73,0,0,1,.56-2.65c1.46-4.42,3.38-10.25,4.8-14.46-4.75-5.73-10.41-8.95-17.87-8.36a76,76,0,0,1-1.13,8.23,74.58,74.58,0,0,1-2.92,9.7,108,108,0,0,0-6.54,31.24c-.45,6.43-1.37,12.82-2,19.23a8.41,8.41,0,0,1-3.95,6.7c-6.43,4.11-10.38,10.54-14.34,16.94a3.25,3.25,0,0,0-.66,2.64c.13.74,1.55.87,2,.67C164,255.77,168.12,249.38,169.46,250.35Z" />
          <path onClick={() => this.selectDiselectFromBody(HUMAN_BODY.BACK_THORAX)} className={`cls-1 ${selectedPartBody.includes(HUMAN_BODY.BACK_THORAX.value) ? "active-body" : "normal-body"}`} d="M284.55,180.41c-5.63-1.75-31.52-10.23-32.93-9.74-3.78,1.32-33.17,9.75-33.8,10-.09-1.81-.07-3.55-.26-5.27-.72-6.5-4.13-29.49-5-34.5-.07-.42,17.9-34.22,20.83-39.29,11.59,4.64,25.56,3.84,37.23-.72,1.42,2.83,18.39,38.27,19.22,39.29C287.35,153,284.76,166.41,284.55,180.41Z" />
          <path onClick={() => this.selectDiselectFromBody(HUMAN_BODY.LUMBAR_BUTTOCKS)} className={`cls-1 ${selectedPartBody.includes(HUMAN_BODY.LUMBAR_BUTTOCKS.value) ? "active-body" : "normal-body"}`} d="M292.71,236.71a136.88,136.88,0,0,1-2.54-24.58,39.36,39.36,0,0,0-.66-8.7c-1.52-6.81-3.39-13.54-5.14-20.39-.7-.16-1.68-.32-2.62-.61-8.22-2.56-16.43-5.16-24.67-7.69-2.38-.73-4.61-1.51-7.32-.63-7.91,2.55-15.94,4.68-23.93,6.94-2.77.78-5.57,1.42-8.44,2.15a82.35,82.35,0,0,1-2.07,9A70,70,0,0,0,211.54,215a137.83,137.83,0,0,1-1.32,15.39c-.58,5.05-1.68,10.06-2,15.12a123.42,123.42,0,0,0,.73,22.81l14.5,2.35c1.22.24,2.44.51,3.65.78a65.06,65.06,0,0,0,7.76,1.41c.42,0,.85.07,1.27.09a18.39,18.39,0,0,0,2.65-.07,12,12,0,0,0,7.13-3.07,12.29,12.29,0,0,0,1-1c2.2-2.54,2.88-5.71,3.09-9.06.06-.9-.42-2.64,1.15-2.56s.8,1.64.84,2.54c.19,4.23,1.56,7.54,3.95,9.79a12.62,12.62,0,0,0,6.95,3.17c.38.06.76.1,1.16.14.61.05,1.22.08,1.82.09a34.81,34.81,0,0,0,8.89-1.12c1.26-.31,2.52-.67,3.78-1.06l.78-.24s12-2.79,13.81-3.2c.32-3.3.59-6.61.78-9.93A89.25,89.25,0,0,0,292.71,236.71Z" />
          <path onClick={() => this.selectDiselectFromBody(HUMAN_BODY.KNEES)} className={`cls-1 ${selectedPartBody.includes(HUMAN_BODY.KNEES.value) ? "active-body" : "normal-body"}`} d="M219.85,332.19c-.43-2.43-.88-4.86-1.31-7.29-.61-3.44-1.32-6.86-2-10.28l.33-.15c.4.49.78,1,1.21,1.45,1.6,1.66,3.13,3.41,4.74,5.06l0,0a37,37,0,0,0,3.08,2.86,9.65,9.65,0,0,0,2.48,1.5l.15.06c2.42.92,4.8.37,7.16-1.53a34.77,34.77,0,0,0,5-5.29c.2-.25.39-.51.58-.76h0c1.24-1.64,2.34-3.39,3.52-5.08a186.36,186.36,0,0,0,0,42.45c-8.05,3.37-15.85,3.89-23.5-1,.07-.78,0-2.27.09-3.17.11-2.55.54-5.15.2-7.63-.51-3.72-1.14-7.41-1.79-11.11Z" />
          <path onClick={() => this.selectDiselectFromBody(HUMAN_BODY.LEG_FOOT)} className={`cls-1 ${selectedPartBody.includes(HUMAN_BODY.LEG_FOOT.value) ? "active-body" : "normal-body"}`} d="M245.58,369.66c-.66,15.56-1.52,31.11-2.19,46.67a17.24,17.24,0,0,0,.8,6.44,14.08,14.08,0,0,1-.63,11.27A29.2,29.2,0,0,0,241.23,449a61.83,61.83,0,0,1-.29,9.81,44.74,44.74,0,0,1-1.26,6.38,5.81,5.81,0,0,1-1.1,2.6,2.45,2.45,0,0,1-2.21.48c-.63-.19-.5-1-.52-1.63a23.15,23.15,0,0,1,.16-2.91c.18-2.19,0-2.41-2.05-2.66a28.66,28.66,0,0,1-10.73-3c-1.33-.74-1.61-1.47-1.06-3,2.44-6.76,5-13.51,7-20.4,1.86-6.26,3.49-12.65,1.78-19.35-1.9-7.44-3.69-14.9-5.51-22.36-2.55-10.45-4.64-21-4.63-31.84,0-1,.12-2,.2-3.4,8,4.52,15.87,4.16,24.19.48C245.36,362.18,245.74,365.93,245.58,369.66Z" />
          <path onClick={() => this.selectDiselectFromBody(HUMAN_BODY.HEADACHE)} className={`cls-1 ${selectedPartBody.includes(HUMAN_BODY.HEADACHE.value) ? "active-body" : "normal-body"}`} d="M234.48,67.72l-2.1.07a4.36,4.36,0,0,0,0,1.38,4.33,4.33,0,0,1-4.36-2.7,11.1,11.1,0,0,1-.51-8.66A2.35,2.35,0,0,1,230.32,56c1.82.28,2.14-.13,1.87-2.1A27.73,27.73,0,0,1,233,42.52c1.73-6.16,5.69-10,11.61-11.44a25.52,25.52,0,0,1,12.84,0c7.4,2,11.71,7.41,12.38,15.71a60.89,60.89,0,0,1,0,7.47c-.06,1.45.29,2.1,1.78,1.73a2.22,2.22,0,0,1,2.87,1.69c.92,3,1.26,5.91-.41,8.77a4.9,4.9,0,0,1-4.4,2.73,4.63,4.63,0,0,0-.19-1.18s-1.76-.52-1.88.09c-.23,1.17-.25,2.38-.4,3.94-2.09-3-3.87-5.78-5.83-8.39a28.52,28.52,0,0,0-2.23-2.6L259,61c-.55-.57-1.12-1.12-1.7-1.65-3.6-3.25-7.77-3.52-11.84-.36-.91.7-1.78,1.46-2.63,2.23C240.85,63,239,65,237,66.84l-.17.16c-.68.65-1.25,1.43-2.09,2.4A6.22,6.22,0,0,0,234.48,67.72Z" />
          <path onClick={() => this.selectDiselectFromBody(HUMAN_BODY.CERVICAL)} className={`cls-1 ${selectedPartBody.includes(HUMAN_BODY.CERVICAL.value) ? "active-body" : "normal-body"}`} d="M233.91,92.17a14,14,0,0,0,5.92-8.7,5.6,5.6,0,0,0-1-4.79,44.79,44.79,0,0,1-3-4.5,1.76,1.76,0,0,1,0-1.58c.66-.7,1.32-1.42,2-2.13,1.94-2.1,3.87-4.22,5.92-6.2.84-.81,1.69-1.6,2.57-2.35,3.89-3.31,7-2.89,10.42,1,.43.49.85,1,1.26,1.52,1.85,2.33,3.49,4.85,5.29,7.23h0c.72.95,1.57,1.79,2.64,3-.52.78-1.15,1.87-1.91,2.84-3,3.84-3.12,7.3-.33,11.38A19.3,19.3,0,0,0,271.45,95l2.42,1.19c-15.34,7.61-30.55,7-45.6-.49C230.07,94.59,232.07,93.5,233.91,92.17Z" />
          <path onClick={() => this.selectDiselectFromBody(HUMAN_BODY.SHOULDERS)} className={`cls-1 ${selectedPartBody.includes(HUMAN_BODY.SHOULDERS.value) ? "active-body" : "normal-body"}`} d="M210.66,167.56c-8.47-7.23-7.79-6.67-18.47-8.15a9.45,9.45,0,0,1,0-1.17c1.61-11.86,3-23.76,4.94-35.56,1.25-7.53,4.76-13.94,11.15-18.26,4.83-3.26,10.34-4.7,15.71-6.54a1,1,0,0,1,.67,0c1.87.77,4.92,1.65,6.89,2.49,0,0-13.41,22.79-19.54,35.09-.57-2.6-.75-3.65-1.33-5.81l-1.9,1.11c1.32,6.67,2.37,13.41,4,20C214.36,156.82,212.43,162.06,210.66,167.56Z" />
          <path onClick={() => this.selectDiselectFromBody(HUMAN_BODY.LUMBAR_BUTTOCKS)} className={`cls-1 ${selectedPartBody.includes(HUMAN_BODY.LUMBAR_BUTTOCKS.value) ? "active-body" : "normal-body"}`} d="M212.42,293q.83,5.45,1.65,10.91c.24,1.6.23,3.67,1.17,4.64,2.42,2.52,4.44,6.14,7,8.49q1.68,1.53,3.43,3l1.07.87c3.66,2.92,6.86,2.54,10.11-.94a47.41,47.41,0,0,0,3.23-3.91c1.33-1.77,3.05-4.75,4.36-6.54a5,5,0,0,0,.89-2.47c.6-8.67,1.18-17.34,1.65-26,.17-3.06,0-6.14,0-9.32-.29.16-.62.36-1,.51l-.26.12a28.3,28.3,0,0,1-5.53,2.25c-.53.11-1.05.19-1.58.26a25.12,25.12,0,0,1-2.7.21h0a33.65,33.65,0,0,1-9.29-1.23h0c-1.17-.31-2.34-.66-3.5-1h0l-.91-.3c-.08,0-9.74-1.62-13.09-2.22l.1.75C210.23,278.36,211.32,285.69,212.42,293Z" />
          <path onClick={() => this.selectDiselectFromBody(HUMAN_BODY.LUMBAR_BUTTOCKS)} className={`cls-1 ${selectedPartBody.includes(HUMAN_BODY.LUMBAR_BUTTOCKS.value) ? "active-body" : "normal-body"}`} d="M278.62,272.76c-1.19.37-2.39.72-3.58,1h0a34.58,34.58,0,0,1-9,1.29h-.17a21.69,21.69,0,0,1-3-.25,19.63,19.63,0,0,1-6.89-2.43c-.32-.18-.63-.37-1-.58,0,3.7-.14,7.35,0,11,.38,8.07.92,16.14,1.42,24.21a2.26,2.26,0,0,0,.41,1.13c.93,1.27,1.93,2.48,2.87,3.74.53.71,1,1.42,1.56,2.14a89.92,89.92,0,0,0,5.61,7.4c2.55,2.88,5.61,3,8.3.6l.08-.07c1.13-1,2.21-2.14,3.26-3.27,1.25-1.35,2.47-2.73,3.69-4.1s2.1-3.09,3.42-4.31a4.36,4.36,0,0,0,1.55-2.63c.72-4.41,1.48-8.81,2.17-13.22v0c1.31-8.33,2.54-16.67,3.42-25.05-3.32.81-13.83,3.29-14.18,3.4Z" />
          <path onClick={() => this.selectDiselectFromBody(HUMAN_BODY.LEG_FOOT)} className={`cls-1 ${selectedPartBody.includes(HUMAN_BODY.LEG_FOOT.value) ? "active-body" : "normal-body"}`} d="M256.89,358.13c-.14,4-.52,7.8-.37,11.53.66,15.56,1.52,31.11,2.19,46.67a17.24,17.24,0,0,1-.8,6.44,14.08,14.08,0,0,0,.63,11.27A29.2,29.2,0,0,1,260.88,449a61.83,61.83,0,0,0,.29,9.81,44.74,44.74,0,0,0,1.26,6.38,5.81,5.81,0,0,0,1.1,2.6,3,3,0,0,0,2.21.48c.22,0,.5-1,.52-1.63a23.15,23.15,0,0,0-.16-2.91c-.18-2.19,0-2.41,2.05-2.66a28.66,28.66,0,0,0,10.73-3c1.33-.74,1.61-1.47,1.06-3-2.44-6.76-5-13.51-7-20.4-1.86-6.26-3.49-12.65-1.78-19.35,1.9-7.44,3.69-14.9,5.51-22.36,2.55-10.45,4.64-21,4.63-31.84,0-1-.12-2-.2-3.4C273.09,362.17,265.2,361.81,256.89,358.13Z" />
          <path onClick={() => this.selectDiselectFromBody(HUMAN_BODY.KNEES)} className={`cls-1 ${selectedPartBody.includes(HUMAN_BODY.KNEES.value) ? "active-body" : "normal-body"}`} d="M283.71,325.7c-.44,2.45-.89,4.91-1.32,7.36-.66,3.69-1.29,7.39-1.79,11.11-.34,2.48.1,5.09.2,7.63,0,.9.15,1.81.21,2.58-7.64,4.91-15.45,4.4-23.5,1a181.31,181.31,0,0,0-.1-41.86c1.17,1.69,2.28,3.45,3.52,5.08.19.26.38.52.59.77a34.77,34.77,0,0,0,5,5.29c2.36,1.89,4.74,2.45,7.16,1.53a9.55,9.55,0,0,0,2.63-1.56,37,37,0,0,0,3.08-2.86c1.62-1.66,3.16-3.42,4.77-5.09.44-.45.81-1,1.21-1.45l.33.15C285,318.84,284.32,322.26,283.71,325.7Z" />
        </g>
      </svg>
    )
  }
}


const mapStateToProps = state => state.questionnaire
export default connect(mapStateToProps, { selectDiselectPartBody, nextSelectedFromBodyQuestions })(HumanBodyBackSide)

