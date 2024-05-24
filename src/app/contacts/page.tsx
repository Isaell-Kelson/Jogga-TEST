"use client";
import React from 'react';
import ContactsList from '../../components/contact/contact-list';

export default function ContactsPage() {
    return (
        <section className="relative">

                <div className="h-full flex flex-col items-center justify-center p-6 md:p-12 lg:p-16 gap-8 relative z-10">
                    <ContactsList />
                </div>
        </section>
    );
}
