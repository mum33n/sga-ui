'use client';

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from 'next/navigation';


import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {ArrowUpNarrowWide, CircleAlert, Headphones, Plus, X, Image, Film} from "lucide-react";
import {clsx} from "clsx";
import VoiceNoteInput from "@/app/form/formComponents/VoiceNoteInput";

const ProfileForm = () => {
    const router = useRouter();

    const stepOneSchema = z.object({
        courseTitle: z.string().min(1, { message: "Course title is required." }),
        courseOrder: z.string().min(5, { message: "Course order must be at least 5 characters." }),
        description: z.string().min(2, { message: "Description must be at least 2 characters." }),
        courseThumbnail: z.any().refine(
            (file) => {
                if (typeof window === 'undefined') return true; // Skip validation on server
                return file instanceof File && file.size <= 5 * 1024 * 1024;
            },
            { message: "Image size should be less than 5MB." }
        ).refine(
            (file) => {
                if (typeof window === 'undefined') return true; // Skip validation on server
                return file instanceof File && ["image/jpeg", "image/png", "image/gif"].includes(file.type);
            },
            { message: "Only JPEG, PNG, or GIF images are allowed." }
        ),
    });

    const stepTwoSchema = z.object({
        assignmentQuestion: z.string().min(1, { message: "Assignment question is required." }),
        assignmentAudio: z
            .any()
            .refine(
                (file) => {
                    if (typeof window === 'undefined') return true;
                    return file === null || (file instanceof File && file.size <= 10 * 1024 * 1024);
                },
                { message: "Audio file size should be less than 10MB." }
            )
            .refine(
                (file) => {
                    if (typeof window === 'undefined') return true;
                    return file === null || (file instanceof File && ["audio/mpeg", "audio/wav", "audio/ogg"].includes(file.type));
                },
                { message: "Only MP3, WAV, or OGG audio formats are allowed." }
            )
            .nullable(),
        assignmentImage: z.any().refine(
            (file) => {
                if (typeof window === 'undefined') return true;
                return file instanceof File && file.size <= 5 * 1024 * 1024;
            },
            { message: "Image size should be less than 5MB." }
        ).refine(
            (file) => {
                if (typeof window === 'undefined') return true;
                return file instanceof File && ["image/jpeg", "image/png", "image/gif"].includes(file.type);
            },
            { message: "Only JPEG, PNG, or GIF images are allowed." }
        ),
        voiceNote: z.any().refine(
            (file) => {
                if (typeof window === 'undefined') return true;
                return file instanceof File && file.size <= 10 * 1024 * 1024;
            },
            { message: "Voice note must be less than 10MB." }
        ),
        courseVideo: z
            .any()
            .refine(
                (file) => {
                    if (typeof window === 'undefined') return true;
                    return file instanceof File && file.size <= 50 * 1024 * 1024;
                },
                { message: "Video size should be less than 50MB." }
            )
            .refine(
                (file) => {
                    if (typeof window === 'undefined') return true;
                    return file instanceof File && ["video/mp4", "video/webm", "video/ogg"].includes(file.type);
                },
                { message: "Only MP4, WebM, or OGG videos are allowed." }
            ),
    });

    type StepOneValues = z.infer<typeof stepOneSchema>;
    type StepTwoValues = z.infer<typeof stepTwoSchema>;

    const handleBack = () => {
        if (window.history.length > 1) {
            router.back(); // Go to the previous page
        } else {
            router.push('/admin'); // Fallback route
        }
    };

    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<StepOneValues & StepTwoValues>({
        courseTitle: "",
        courseOrder: "",
        description: "",
        assignmentQuestion: "",
        courseThumbnail: null,
        assignmentAudio: null,
        assignmentImage: null
    });

    // Conditionally apply the schema based on the current step
    const formSchema = currentStep === 0 ? stepOneSchema : stepTwoSchema;

    // Initialize form with conditional schema
    const form = useForm<StepOneValues & StepTwoValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            courseTitle: "",
            courseOrder: "",
            description: "",
            assignmentQuestion: "",
            courseThumbnail: null,
            assignmentAudio: null,
            assignmentImage: null
        },
    });

    const onSubmit = (values: StepOneValues & StepTwoValues) => {
        console.log("Form submitted with values:", { ...formData, ...values });
    };

    const next = async () => {
        const isValid = await form.trigger(); // Validate current step
        if (isValid) {
            setFormData((prevData) => ({
                ...prevData,
                ...form.getValues(), // Merge current values into formData
            }));
            setCurrentStep((prevStep) => prevStep + 1); // Move to the next step
        }
    };


    const prev = () => {
        setCurrentStep((prevStep) => prevStep - 1)
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, name) => {
        if (typeof window !== 'undefined' && event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            form.setValue(name, file); // Update the form value
            console.log(file); // Debugging
        }
    };

    const handleAudioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (typeof window !== 'undefined' && event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            form.setValue("assignmentAudio", file); // Update the form value
            console.log(file); // Debugging: Log the audio file
        }
    };

    const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (typeof window !== 'undefined' && event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            form.setValue("courseVideo", file); // Update form value for video
            console.log("Selected video file:", file); // Debugging
        }
    };


    return (
        <section className="w-full h-full px-12 py-8">
            <div className="w-full flex justify-end cursor-pointer">
                <X
                    style={{
                        width: '30px',
                        height: '30px',
                        color: 'black',
                        backgroundColor: '#FDF4E9',
                        borderRadius: '50px',
                        padding: '5px',
                        cursor: 'pointer'
                    }}
                   onClick={handleBack}
                />
            </div>

            <div className="flex flex-col justify-center items-center gap-6 font-medium mb-7">
                <span className="text-xl">Add course</span>
                <span className="">step {currentStep + 1} of 2</span>
            </div>

            <Form {...form}>
                {Number(currentStep as number) === 0 && (
                    <>
                        <form className="space-y-7">
                            <FormField
                                control={form.control}
                                name="courseTitle"
                                render={({field}) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel>Course Title</FormLabel>
                                        <FormControl>
                                            <Input className="bg-[#F2E9DF] border-0 h-12" {...field} />
                                        </FormControl>
                                        <FormDescription></FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="courseOrder"
                                render={({field}) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel>Course Order</FormLabel>
                                        <FormControl>
                                            <Input className="bg-[#F2E9DF] border-0 h-12" {...field} />
                                        </FormControl>
                                        <FormDescription className="flex items-center gap-1 text-[10px] mt-3.5">
                                            <CircleAlert width={"9px"} height={"9px"} fill={"#976B5B"} color={"white"} />
                                            This is the course order.
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({field}) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                        <textarea
                                            className="bg-[#F2E9DF] border-0 h-36 w-full p-2 rounded-lg"
                                            {...field}
                                        />
                                        </FormControl>
                                        <FormDescription></FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="courseThumbnail"
                                render={({field}) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel>Course Thumbnail</FormLabel>
                                        <FormControl>
                                            <>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => handleImageChange(e, "courseThumbnail")}
                                                    id="course-thumbnail"
                                                    className="hidden"
                                                />
                                                <label
                                                    htmlFor="course-thumbnail"
                                                    className="text-sm bg-[#F2E9DF] w-fit px-4 py-3 rounded-lg flex items-center justify-center cursor-pointer"
                                                >
                                                    {typeof window !== 'undefined' && field.value instanceof File ? field.value.name : "Select course thumbnail"}
                                                </label>
                                            </>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <div className="flex justify-center">
                                <Button
                                    onClick={next}
                                    className={clsx("w-40 h-11", Number(currentStep as number) === 1 && "hidden")}
                                >
                                    Next
                                </Button>
                            </div>
                        </form>
                    </>

                )}

                {Number(currentStep as number) === 1 && (
                    <>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="assignmentQuestion"
                                render={({field}) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel>Assignment Question</FormLabel>
                                        <FormControl>
                                            <Input className="bg-[#F2E9DF] border-0 h-12" {...field} />
                                        </FormControl>
                                        <FormDescription></FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-between items-center">
                                <Button
                                    type="button"
                                    className="py-1.5 px-4 bg-[#602712]"
                                >
                                    <Plus size={24} className="font-medium" />
                                    Add
                                </Button>
                                <ArrowUpNarrowWide className="cursor-pointer" />
                            </div>
                            <>
                                <FormField
                                    control={form.control}
                                    name={"assignmentAudio"}
                                    render={({field}) => (
                                        <FormItem className="space-y-1">
                                            <FormLabel></FormLabel>
                                            <FormControl>
                                                <>
                                                    <input
                                                        type="file"
                                                        accept="audio/*"
                                                        onChange={(e) => {handleAudioChange(e)}}
                                                        id="audio-file"
                                                        className="hidden"
                                                    />
                                                    <label
                                                        htmlFor="audio-file"
                                                        className="w-52 h-10 px-4 py-3 rounded-lg flex items-center cursor-pointer border border-[#C4AAA1] bg-[#F0EAE8]"
                                                    >
                                                        {field.value instanceof File
                                                            ? field.value.name
                                                            : <span className="text-sm flex gap-4 items-center text-[#1E1E1E]">
                                                                <Headphones width={16} height={16} color={"#662F1B"} />
                                                                Assignment audio
                                                              </span>}
                                                    </label>
                                                </>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="assignmentImage"
                                    render={({field}) => (
                                        <FormItem className="space-y-1">
                                            <FormLabel></FormLabel>
                                            <FormControl>
                                                <>
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(e) => handleImageChange(e, "assignmentImage")}
                                                        id="assignment-image"
                                                        className="hidden"
                                                    />
                                                    <label
                                                        htmlFor="assignment-image"
                                                        className="w-52 h-10 px-4 py-3 rounded-lg flex items-center cursor-pointer border border-[#C4AAA1] bg-[#F0EAE8]"
                                                    >
                                                        {field.value instanceof File
                                                            ? field.value.name
                                                            : <span className="text-sm flex gap-4 items-center text-[#1E1E1E]">
                                                                <Image width={16} height={16} color={"#662F1B"} aria-label="Image icon" />
                                                                Image
                                                              </span>}
                                                    </label>
                                                </>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="voiceNote"
                                    render={() => (
                                        <VoiceNoteInput
                                            onVoiceNoteRecorded={(audioFile) => form.setValue("voiceNote", audioFile)}
                                        />
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="courseVideo"
                                    render={({ field }) => (
                                        <FormItem className="space-y-1">
                                            <FormLabel></FormLabel>
                                            <FormControl>
                                                <>
                                                    <input
                                                        type="file"
                                                        accept="video/*"
                                                        onChange={handleVideoChange}
                                                        id="course-video"
                                                        className="hidden"
                                                    />
                                                    <label
                                                        htmlFor="course-video"
                                                        className="w-52 h-10 px-4 py-3 rounded-lg flex items-center cursor-pointer border border-[#C4AAA1] bg-[#F0EAE8] text-sm"
                                                    >
                                                        {
                                                            field.value instanceof File
                                                                ? field.value.name
                                                                : <span className="text-sm flex gap-4 items-center text-[#1E1E1E]">
                                                                    <Film width={16} height={16} color={"#662F1B"} />
                                                                    Video
                                                                  </span>
                                                        }
                                                    </label>
                                                </>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </>
                            <div className="flex justify-between">
                                <Button
                                    onClick={prev}
                                    className={`${currentStep === 0 && "hidden"} text-[#602712] border-2 border-[#C4AAA1] bg-white w-40 h-11`}
                                >
                                    Previous
                                </Button>
                                <Button
                                    type="submit"
                                    className="w-40 h-11 bg-[#602712]"
                                >
                                    Save
                                </Button>
                            </div>

                        </form>
                    </>
                )}
            </Form>
        </section>
    );
}

export default ProfileForm