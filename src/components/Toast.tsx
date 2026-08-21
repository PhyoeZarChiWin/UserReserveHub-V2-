import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 z-50 max-w-sm bg-[#334155] text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-slate-600 animate-slide-up">
      <CheckCircle2 className="w-5 h-5 text-[#84CC16] flex-shrink-0" />
      <p className="text-sm font-medium flex-1 leading-snug">{message}</p>
      <button
        onClick={onClose}
        className="text-slate-300 hover:text-white p-1 rounded-lg"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const notifications = [
    {
      id: '1',
      title: 'Booking Confirmed!',
      desc: 'Your reservation at Golden Mandalay Kitchen for Aug 08 has been confirmed.',
      time: '10 mins ago',
      unread: true,
    },
    {
      id: '2',
      title: '20% Off Weekend Offer',
      desc: 'Claim 20% off on your next booking at Sakura Garden Lounge.',
      time: '2 hours ago',
      unread: true,
    },
    {
      id: '3',
      title: 'Reminder',
      desc: 'Don’t forget your upcoming reservation at Glass Pavilion Hall.',
      time: '1 day ago',
      unread: true,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden border border-slate-100 animate-scale-up">
        <div className="bg-[#0F766E] text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-[#F59E0B]" />
            <h3 className="font-bold text-lg">Notifications</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 divide-y divide-slate-100 max-h-96 overflow-y-auto">
          {notifications.map((n) => (
            <div key={n.id} className="py-3.5 first:pt-0 last:pb-0 flex gap-3">
              <span className="w-2.5 h-2.5 mt-1.5 rounded-full bg-[#F59E0B] flex-shrink-0" />
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-semibold text-sm text-[#334155]">{n.title}</h4>
                  <span className="text-[11px] text-slate-400">{n.time}</span>
                </div>
                <p className="text-xs text-[#334155]/80 mt-0.5 leading-relaxed">{n.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 bg-[#F8FAFC] border-t border-slate-100 text-center">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#0F766E] hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
