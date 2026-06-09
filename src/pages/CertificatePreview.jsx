import React from 'react';
import { Download, Award } from 'lucide-react';

export default function CertificatePreview() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Your Certificates</h1>
          <p className="text-slate-600 dark:text-slate-400">View and download your earned achievements.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors">
          <Download className="h-5 w-5" /> Download PDF
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 p-8 md:p-16 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg text-center relative overflow-hidden">
        {/* Certificate Decoration */}
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600" />
        <div className="absolute -top-10 -left-10 w-40 h-40 border-[20px] border-blue-50 dark:border-blue-900/20 rounded-full" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 border-[20px] border-blue-50 dark:border-blue-900/20 rounded-full" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <Award className="h-20 w-20 text-amber-500 mx-auto mb-6" />
          
          <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-4">Certificate of Completion</h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">This is to certify that</p>
          
          <h3 className="text-4xl md:text-5xl font-bold mb-8 font-serif">John Student</h3>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
            has successfully completed the course <br />
            <strong className="text-slate-900 dark:text-white text-xl">English Fundamentals</strong>
          </p>

          <div className="flex justify-between items-center pt-12 border-t border-slate-200 dark:border-slate-800 mt-12">
            <div className="text-left">
              <p className="font-bold text-slate-900 dark:text-white">June 9, 2026</p>
              <p className="text-sm text-slate-500">Date of Completion</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-slate-900 dark:text-white font-serif italic text-xl">EnglishHub</p>
              <p className="text-sm text-slate-500">Platform Signature</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
