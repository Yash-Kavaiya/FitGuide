import cv2
import numpy as np
import mediapipe as mp

mp_pose = mp.solutions.pose
pose = mp_pose.Pose()

def process_live_video(video_source=0):
    cap = cv2.VideoCapture(video_source)
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        frame = detect_posture(frame)
        cv2.imshow('Posture Detection', frame)
        if cv2.waitKey(10) & 0xFF == ord('q'):
            break
    cap.release()
    cv2.destroyAllWindows()

def detect_posture(frame):
    image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = pose.process(image)
    if results.pose_landmarks:
        mp.solutions.drawing_utils.draw_landmarks(
            frame, results.pose_landmarks, mp_pose.POSE_CONNECTIONS)
    return frame

def format_posture_detection_results(results):
    if results.pose_landmarks:
        return "Posture detected successfully."
    else:
        return "No posture detected."
