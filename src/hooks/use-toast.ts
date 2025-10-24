"use client"

import { toast as sonnerToast } from "sonner"

// Wrapper untuk kompatibilitas dengan API lama
export interface ToastOptions {
  title?: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
  duration?: number
  variant?: "default" | "destructive"
}

// Fungsi toast yang menggunakan Sonner
export function toast(options: ToastOptions | string) {
  // Jika string langsung, gunakan sebagai title
  if (typeof options === "string") {
    return sonnerToast(options)
  }

  const { title, description, action, duration, variant } = options

  // Gunakan variant untuk menentukan tipe toast
  if (variant === "destructive") {
    return sonnerToast.error(title, {
      description,
      action,
      duration,
    })
  }

  return sonnerToast(title, {
    description,
    action,
    duration,
  })
}

// Helper functions untuk berbagai tipe toast
toast.success = (message: string, options?: Omit<ToastOptions, "title">) => {
  return sonnerToast.success(message, {
    description: options?.description,
    action: options?.action,
    duration: options?.duration,
  })
}

toast.error = (message: string, options?: Omit<ToastOptions, "title">) => {
  return sonnerToast.error(message, {
    description: options?.description,
    action: options?.action,
    duration: options?.duration,
  })
}

toast.warning = (message: string, options?: Omit<ToastOptions, "title">) => {
  return sonnerToast.warning(message, {
    description: options?.description,
    action: options?.action,
    duration: options?.duration,
  })
}

toast.info = (message: string, options?: Omit<ToastOptions, "title">) => {
  return sonnerToast.info(message, {
    description: options?.description,
    action: options?.action,
    duration: options?.duration,
  })
}

toast.loading = (message: string, options?: Omit<ToastOptions, "title">) => {
  return sonnerToast.loading(message, {
    description: options?.description,
    action: options?.action,
    duration: options?.duration,
  })
}

toast.promise = sonnerToast.promise

// Hook untuk kompatibilitas (opsional)
export function useToast() {
  return {
    toast,
    dismiss: sonnerToast.dismiss,
  }
}
