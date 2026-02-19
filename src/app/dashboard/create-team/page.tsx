'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

const TRACKS = [
  { value: 'robotics', label: 'Robotics' },
  { value: 'cybersecurity', label: 'Cybersecurity' },
  { value: 'ai and computer vision', label: 'AI and Computer Vision' },
];

interface TeammateFields {
  name: string;
  email: string;
  mobile: string;
  regNum: string;
}

const emptyTeammate: TeammateFields = { name: '', email: '', mobile: '', regNum: '' };

export default function CreateTeamPage() {
  const supabase = createClient();
  const router = useRouter();

  const [teamName, setTeamName] = useState('');
  const [track, setTrack] = useState('');
  const [teammates, setTeammates] = useState<TeammateFields[]>([
    { ...emptyTeammate },
    { ...emptyTeammate },
    { ...emptyTeammate },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const updateTeammate = (index: number, field: keyof TeammateFields, value: string) => {
    setTeammates((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!teamName.trim() || !track) {
      setError('Please enter a team name and select a track.');
      setLoading(false);
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      setError('Authentication error. Please sign in again.');
      setLoading(false);
      return;
    }

    // Build the insert object
    const teamData: Record<string, unknown> = {
      team_name: teamName.trim(),
      leader_id: user.id,
      track: track,
    };

    // Add teammate data for filled teammates
    teammates.forEach((tm, i) => {
      const num = i + 1;
      if (tm.name.trim()) {
        teamData[`teammate${num}_name`] = tm.name.trim();
        teamData[`teammate${num}_email`] = tm.email.trim() || null;
        teamData[`teammate${num}_mobile`] = tm.mobile ? parseInt(tm.mobile) : null;
        teamData[`teammate${num}_reg_num`] = tm.regNum ? parseInt(tm.regNum) : null;
      }
    });

    const { error: insertError } = await supabase.from('teams').insert(teamData);

    if (insertError) {
      if (insertError.message.includes('team_name')) {
        setError('This team name is already taken.');
      } else if (insertError.message.includes('leader_id')) {
        setError('You have already created a team.');
      } else {
        setError(insertError.message);
      }
      setLoading(false);
      return;
    }

    router.push('/dashboard');
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        {/* Card */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
          <h1
            className="text-2xl font-bold text-white text-center mb-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Create Your Team
          </h1>
          <p
            className="text-sm text-gray-400 text-center mb-8"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Add your teammates to complete registration
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Team Name */}
            <div>
              <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">
                Team Name
              </label>
              <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Enter a unique team name"
                className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white text-sm outline-none focus:border-[rgb(235,107,38)]/50 transition-colors placeholder:text-gray-600"
                required
              />
            </div>

            {/* Track */}
            <div>
              <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">
                Track
              </label>
              <select
                value={track}
                onChange={(e) => setTrack(e.target.value)}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white text-sm outline-none focus:border-[rgb(235,107,38)]/50 transition-colors appearance-none cursor-pointer"
                required
              >
                <option value="" disabled>
                  Select a track
                </option>
                {TRACKS.map((t) => (
                  <option key={t.value} value={t.value} className="bg-[#0a0a0a]">
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Divider */}
            <div className="border-t border-white/5 pt-2" />

            {/* Teammates */}
            {teammates.map((tm, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-gray-400">
                    {index + 1}
                  </span>
                  Teammate {index + 1}
                  {index > 0 && (
                    <span className="text-xs text-gray-500 font-normal">(Optional)</span>
                  )}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      value={tm.name}
                      onChange={(e) => updateTeammate(index, 'name', e.target.value)}
                      placeholder="Full Name"
                      className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white text-sm outline-none focus:border-[rgb(235,107,38)]/50 transition-colors placeholder:text-gray-600"
                      required={index === 0}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      value={tm.email}
                      onChange={(e) => updateTeammate(index, 'email', e.target.value)}
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white text-sm outline-none focus:border-[rgb(235,107,38)]/50 transition-colors placeholder:text-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      value={tm.mobile}
                      onChange={(e) =>
                        updateTeammate(index, 'mobile', e.target.value.replace(/\D/g, '').slice(0, 10))
                      }
                      placeholder="10-digit number"
                      className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white text-sm outline-none focus:border-[rgb(235,107,38)]/50 transition-colors placeholder:text-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">
                      Reg / ID Number
                    </label>
                    <input
                      type="number"
                      value={tm.regNum}
                      onChange={(e) => updateTeammate(index, 'regNum', e.target.value)}
                      placeholder="Registration Number"
                      className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white text-sm outline-none focus:border-[rgb(235,107,38)]/50 transition-colors placeholder:text-gray-600"
                    />
                  </div>
                </div>

                {index < teammates.length - 1 && (
                  <div className="border-t border-white/5 mt-1" />
                )}
              </div>
            ))}

            {/* Error */}
            {error && (
              <p className="text-red-400 text-sm text-center bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-white hover:bg-gray-100 text-black font-bold text-sm uppercase tracking-widest rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-white/10 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer mt-2"
            >
              {loading ? 'Creating Team...' : 'Create Team'}
            </button>
          </form>
        </div>

        {/* Back link */}
        <div className="text-center mt-6">
          <a
            href="/dashboard"
            className="text-sm text-gray-500 hover:text-white transition-colors"
          >
            ← Back to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
