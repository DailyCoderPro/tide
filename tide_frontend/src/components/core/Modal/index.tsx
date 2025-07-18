"use client";
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.scss";
import { useClickOutside } from "@/hooks/useClickOutside";

type ModalProps = {
    open: boolean;
    placeHolder: string;
    children: React.ReactNode;
    header: string;
    type: "info" | "warning" | "error" | "success";
    footer: React.ReactNode;
    onClose: () => void;
    onOpen: () => void;
}

export default function Modal(props: ModalProps) {
    const [isOpen, setIsOpen] = useState(props.open || false);
    const [mounted, setMounted] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const previousFocus = useRef<HTMLElement | null>(null);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        if (isOpen) {
            previousFocus.current = document.activeElement as HTMLElement;
            document.body.style.overflow = 'hidden';
            modalRef.current?.focus();
        } else {
            document.body.style.overflow = '';
            previousFocus.current?.focus();
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    };

    const handleOpen = () => {
        setIsOpen(true);
        props.onOpen();
    };

    const handleClose = () => {
        setIsOpen(false);
        props.onClose();
    };

    useClickOutside(modalRef, handleClose);

    const modalContent = isOpen && (
        <div 
            className={styles.modal_backdrop}
            role="presentation"
            onClick={handleClose}
        >
            <div 
                className={styles.modal_content_container}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                ref={modalRef}
                tabIndex={-1}
                onKeyDown={handleKeyDown}
                onClick={e => e.stopPropagation()}
            >
                <div className={styles.modal_content}>
                    <div className={styles.modal_header}>
                        <div id="modal-title" className={styles.modal_title}>{props.header}</div>
                        <div className={styles.modal_close}>
                            <button 
                                onClick={handleClose}
                                aria-label="Close modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                    <div className={styles.modal_body}>
                        {props.children}    
                    </div>
                    <div className={styles.modal_footer}>
                        {props.footer}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className={styles.modal_container}>
            <button 
                onClick={handleOpen}
                aria-haspopup="dialog"
            >
                {props.placeHolder || "Open"}
            </button>
            {mounted && createPortal(modalContent, document.body)}
        </div>
    );
}