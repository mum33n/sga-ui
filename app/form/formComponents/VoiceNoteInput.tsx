import React, { useState, useRef } from "react";
import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import {Mic} from "lucide-react";

interface VoiceNoteInputProps {
    onVoiceNoteRecorded: (audioFile: File) => void;
}

const VoiceNoteInput: React.FC<VoiceNoteInputProps> = ({ onVoiceNoteRecorded }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState<string | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

    const handleStartRecording = async () => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            alert("Your browser does not support audio recording.");
            return;
        }

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;

            audioChunksRef.current = [];

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
                const audioFile = new File([audioBlob], "voice-note.webm", { type: "audio/webm" });
                setAudioURL(URL.createObjectURL(audioBlob));
                onVoiceNoteRecorded(audioFile);
            };

            mediaRecorder.start();
            setIsRecording(true);
        } catch (error) {
            console.error("Error accessing microphone:", error);
        }
    };

    const handleStopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    return (
        <FormItem className="w-full md:w-[48%]">
            <FormLabel></FormLabel>
            <FormControl className="">
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        className={`text-sm w-full h-10 rounded-lg ${isRecording ? "bg-red-500" : "bg-[#F0EAE8]"} text-black px-4 py-3 cursor-pointer border border-[#C4AAA1] flex items-center`}
                        onClick={isRecording ? handleStopRecording : handleStartRecording}
                    >
                        {
                            isRecording
                                ? "Stop"
                                : <span className="flex gap-4 items-center text-[#1E1E1E]">
                                    <Mic width={16} height={16} color={"#662F1B"} />
                                    Voicenote
                                  </span>
                        }
                    </button>
                    {audioURL && (
                        <audio
                            controls
                            className="ml-4"
                            src={audioURL}
                        ></audio>
                    )}
                </div>
            </FormControl>
        </FormItem>
    );
};

export default VoiceNoteInput;
