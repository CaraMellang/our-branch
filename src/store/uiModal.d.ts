import React from "react";

export interface ModalConfig {
    title: string;
    description: string | React.ReactNode;
    variant?: 'alert' | 'confirm' | 'prompt';
    confirmText?: 'string' | '확인';
    calcelText?: 'string' | '취소';
}