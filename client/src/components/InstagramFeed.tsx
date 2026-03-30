import { useEffect } from 'react';

interface InstagramFeedProps {
  className?: string;
}

export default function InstagramFeed({ 
  className = ''
}: InstagramFeedProps) {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={`instagram-feed ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Instagram Post 1 */}
        <div className="flex justify-center">
          <blockquote 
            className="instagram-media" 
            data-instgrm-permalink="https://www.instagram.com/p/DVMmqHYjkrT/" 
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '8px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: '0',
              width: '100%',
            }}
          >
            <div style={{ padding: '16px' }}>
              <a 
                href="https://www.instagram.com/p/DVMmqHYjkrT/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  background: '#FFFFFF',
                  lineHeight: '0',
                  padding: '0 0',
                  textAlign: 'center',
                  textDecoration: 'none',
                  width: '100%',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <div 
                    style={{
                      backgroundColor: '#F4F4F4',
                      borderRadius: '50%',
                      flexGrow: '0',
                      height: '40px',
                      marginRight: '14px',
                      width: '40px',
                    }}
                  />
                  <div 
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: '1',
                      justifyContent: 'center',
                    }}
                  >
                    <div 
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '4px',
                        flexGrow: '0',
                        height: '14px',
                        marginBottom: '6px',
                        width: '100px',
                      }}
                    />
                    <div 
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '4px',
                        flexGrow: '0',
                        height: '14px',
                        width: '60px',
                      }}
                    />
                  </div>
                </div>
                <div style={{ padding: '19% 0' }} />
                <div 
                  style={{
                    display: 'block',
                    height: '50px',
                    margin: '0 auto 12px',
                    width: '50px',
                  }}
                >
                  <svg 
                    width="50px" 
                    height="50px" 
                    viewBox="0 0 60 60" 
                    version="1.1"
                  >
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                        <g>
                          <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60 C535.114,60 530.342,55.228 530.342,49.342 L530.342,9.656 C530.342,3.77 535.114,0 541,0 L556.344,0 C562.23,0 566.996,3.77 566.996,9.656 L566.996,49.342 C566.996,55.228 562.23,60 556.344,60 L541,60 Z M541,54.476 C538.432,54.476 536.34,52.384 536.34,49.816 L536.34,9.156 C536.34,6.588 538.432,4.496 541,4.496 L556.344,4.496 C558.912,4.496 561.004,6.588 561.004,9.156 L561.004,49.816 C561.004,52.384 558.912,54.476 556.344,54.476 L541,54.476 Z" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </a>
              <p style={{ margin: '8px 0 0 0', padding: '0 4px', fontSize: '14px', lineHeight: '17px', marginTop: '8px', marginBottom: '0', color: '#999' }}>
                View this post on Instagram
              </p>
            </div>
          </blockquote>
        </div>

        {/* Instagram Profile Feed Grid */}
        <div className="md:col-span-2">
          <div className="bg-white border border-border  p-8 text-center">
            <h3 className="font-bold text-2xl md:text-3xl text-foreground mb-4">Follow Our Journey</h3>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed font-light mb-8">
              Stay updated with the latest projects, events, and team highlights from Northeastern Launch Labs.
            </p>
            <a 
              href="https://www.instagram.com/nulaunchlabs/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-900 hover:bg-red-900 text-white font-bold px-8 h-12  transition-all duration-200 shadow-lg hover:shadow-lg hover:scale-105"
            >
              Follow @nulaunchlabs
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5m3.106-11.25H12v-3.106c0-.413-.337-.75-.75-.75s-.75.337-.75.75V11.25H8.894c-.413 0-.75.337-.75.75s.337.75.75.75H10.5v3.106c0 .413.337.75.75.75s.75-.337.75-.75V12.75h3.106c.413 0 .75-.337.75-.75s-.337-.75-.75-.75z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-12 p-8 bg-rgba(200, 16, 46, 0.05) border border-red-900/10  text-center">
        <p className="text-foreground/70 text-sm md:text-base">
          📸 Visit our Instagram to see more photos, behind-the-scenes content, and updates from our Launch Teams and Innovation Teams.
        </p>
      </div>
    </div>
  );
}
