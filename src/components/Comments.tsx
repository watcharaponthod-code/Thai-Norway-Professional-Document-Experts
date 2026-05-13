import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, User, Send, Trash2, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Comment {
  id: string;
  name: string;
  content: string;
  date: string;
}

const labels = {
  badge: { th: 'กระดานความคิดเห็น', en: 'Community Comments', no: 'Kommentarfelt' },
  title1: { th: 'แชร์ประสบการณ์หรือ', en: 'SHARE YOUR', no: 'DEL DIN' },
  title2: { th: 'สอบถามเพิ่มเติม', en: 'EXPERIENCE', no: 'ERFARING' },
  subtitle: { th: 'ร่วมเป็นส่วนหนึ่งของชุมชนผู้ใช้บริการของเรา', en: 'Be part of our service community.', no: 'Bli en del av tjenestefellesskapet vårt.' },
  nameLabel: { th: 'ชื่อของคุณ', en: 'Your Name', no: 'Ditt navn' },
  namePlaceholder: { th: 'ระบุชื่อเล่นหรือนามสมมติ', en: 'Enter your name', no: 'Skriv inn navnet ditt' },
  msgLabel: { th: 'ข้อความของคุณ', en: 'Your Message', no: 'Din melding' },
  msgPlaceholder: { th: 'พิมพ์ข้อความของคุณที่นี่...', en: 'Type your message here...', no: 'Skriv meldingen din her...' },
  submit: { th: 'ส่งความคิดเห็น', en: 'Post Comment', no: 'Send kommentar' },
  comments: { th: 'ความคิดเห็น', en: 'Comments', no: 'Kommentarer' },
  empty: { th: 'ยังไม่มีความคิดเห็น มาร่วมเป็นคนแรกกันเถอะ!', en: 'No comments yet. Be the first to share!', no: 'Ingen kommentarer ennå. Vær den første til å dele!' },
  loadMore: { th: 'แสดงเพิ่มเติม', en: 'Load More Comments', no: 'Last inn flere' },
  showLess: { th: 'แสดงน้อยลง', en: 'Show Less', no: 'Vis færre' },
};

export const Comments = () => {
  const { language } = useLanguage();
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const savedComments = localStorage.getItem('thainorexpert_comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  const saveComments = (newComments: Comment[]) => {
    localStorage.setItem('thainorexpert_comments', JSON.stringify(newComments));
    setComments(newComments);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !content) return;
    setIsSubmitting(true);
    setTimeout(() => {
      const locale = language === 'th' ? 'th-TH' : language === 'no' ? 'nb-NO' : 'en-US';
      const newComment: Comment = {
        id: Date.now().toString(),
        name,
        content,
        date: new Date().toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })
      };
      saveComments([newComment, ...comments]);
      setName('');
      setContent('');
      setIsSubmitting(false);
      setVisibleCount(Math.max(visibleCount, 5));
    }, 800);
  };

  const deleteComment = (id: string) => {
    saveComments(comments.filter(c => c.id !== id));
  };

  const visibleComments = comments.slice(0, visibleCount);
  const l = labels;

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 text-brand-red rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
            <MessageSquare size={12} />
            {l.badge[language]}
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4 uppercase tracking-tighter">
            {l.title1[language]}{' '}
            <span className="text-brand-red">{l.title2[language]}</span>
          </h2>
          <p className="text-gray-500 text-xs uppercase tracking-widest font-light">
            {l.subtitle[language]}
          </p>
        </div>

        <div className="bg-brand-cream/20 border border-brand-cream p-8 md:p-12 mb-16 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-navy">
                  <User size={12} className="inline mr-2 text-brand-red" />
                  {l.nameLabel[language]}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={l.namePlaceholder[language]}
                  className="w-full px-5 py-4 bg-white border border-gray-100 focus:outline-none focus:border-brand-navy transition-all text-sm rounded-sm"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-navy">
                <MessageSquare size={12} className="inline mr-2 text-brand-red" />
                {l.msgLabel[language]}
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={4}
                placeholder={l.msgPlaceholder[language]}
                className="w-full px-5 py-4 bg-white border border-gray-100 focus:outline-none focus:border-brand-navy transition-all resize-none text-sm rounded-sm"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-brand-navy hover:bg-brand-red text-white font-bold py-5 px-12 transition-all uppercase tracking-widest text-xs flex items-center gap-3 disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Send size={14} />
              )}
              {l.submit[language]}
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-navy/40">
              {comments.length} {l.comments[language]}
            </h3>
            {comments.length > 5 && (
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                {visibleComments.length} / {comments.length}
              </span>
            )}
          </div>

          <AnimatePresence initial={false}>
            {comments.length === 0 ? (
              <div className="text-center py-20 bg-gray-50/50 rounded-lg border border-dashed border-gray-200">
                <p className="text-gray-400 text-xs uppercase tracking-widest">
                  {l.empty[language]}
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-8">
                  {visibleComments.map((comment) => (
                    <motion.div
                      key={comment.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="bg-white border border-gray-100 p-8 shadow-sm relative group"
                    >
                      <button
                        onClick={() => deleteComment(comment.id)}
                        className="absolute top-4 right-4 text-gray-200 hover:text-brand-red transition-colors opacity-0 group-hover:opacity-100"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-brand-navy/5 flex items-center justify-center rounded-full text-brand-navy">
                          <User size={18} />
                        </div>
                        <div>
                          <h4 className="font-bold text-brand-navy uppercase tracking-tight text-sm">{comment.name}</h4>
                          <div className="flex items-center gap-2 text-[10px] text-gray-400 font-medium uppercase tracking-widest mt-0.5">
                            <Calendar size={10} className="text-brand-red/50" />
                            {comment.date}
                          </div>
                        </div>
                      </div>
                      <div className="pl-0 md:pl-[52px]">
                        <p className="text-gray-600 text-[13px] leading-relaxed font-light">{comment.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-12 flex flex-col items-center gap-4">
                  {visibleCount < comments.length ? (
                    <button
                      onClick={() => setVisibleCount(prev => prev + 5)}
                      className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-navy hover:text-brand-red transition-colors flex items-center gap-2 py-2 px-4 border border-gray-100 hover:border-brand-red/20 rounded-full"
                    >
                      {l.loadMore[language]}
                      <div className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" />
                    </button>
                  ) : comments.length > 5 && (
                    <button
                      onClick={() => setVisibleCount(5)}
                      className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-brand-navy transition-colors py-2 px-4"
                    >
                      {l.showLess[language]}
                    </button>
                  )}
                </div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
