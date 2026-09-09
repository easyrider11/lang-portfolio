export const metadata = {
  title: "Voice Inbox · Privacy Policy",
  description: "How the Voice Inbox iOS app handles your recordings, transcripts, and cards."
};

const EFFECTIVE = "2026-09-09";
const CONTACT = "langlipro@gmail.com";
const REPO = "https://github.com/easyrider11/voice-inbox";

export default function VoiceInboxPrivacy() {
  return (
    <article>
      <p className="crumb">
        <a href="/projects/voice-inbox">← Voice Inbox</a>
      </p>
      <h1 className="page-title">Voice Inbox 隐私政策 · Privacy Policy</h1>
      <p className="project-meta">生效日期 / Effective {EFFECTIVE} · 开发者 / Developer: Lorre (Lang) Li</p>

      <div className="report-body">
        <h2>中文</h2>

        <h3>一句话</h3>
        <p>
          你的录音、转写文字和整理出的卡片只保存在你的手机上。录音只在做语音识别的那几秒钟经过服务器，识别完立刻删除。没有账号，没有广告，没有追踪，不出售任何数据。
        </p>

        <h3>我们处理哪些数据</h3>
        <ul>
          <li><strong>录音</strong>：只在你按下录音按钮时录制，以音频文件保存在你的设备里。</li>
          <li><strong>转写文字</strong>：由语音识别产生，保存在你的设备里，可随卡片一起查看和删除。</li>
          <li><strong>卡片</strong>：待办、提醒、想法，以及你对它们的修改，保存在你的设备里（Apple 的 SwiftData 本地数据库，受设备加密保护）。</li>
        </ul>

        <h3>语音识别在哪里进行</h3>
        <ul>
          <li><strong>本机识别（默认）</strong>：使用 Apple 的语音识别框架。在支持的设备上识别完全在手机内完成，音频不离开手机；若设备不支持本机识别，Apple 可能按其隐私政策在其服务器上处理音频。</li>
          <li><strong>云端识别（可选）</strong>：当 App 连接到已配置云端识别的服务器时，录音会上传到该服务器，由腾讯云语音识别转写。服务器在转写完成后立即删除音频，另有 24 小时自动清理兜底。转写结果交回手机后，服务器不再保留内容。</li>
        </ul>

        <h3>文字整理</h3>
        <p>
          把转写文字分类成待办、提醒或想法，默认由手机上的规则完成。当服务器配置了 Anthropic Claude 时，转写文字（不含音频）会发送给 Claude 进行整理，结果交回手机后服务器不保留。Anthropic 声明不使用 API 数据训练模型。
        </p>

        <h3>服务器日志</h3>
        <p>
          服务器为运维目的保留标准访问日志（请求时间、IP 地址、接口路径），不包含录音或文字内容，定期清理。
        </p>

        <h3>系统权限及用途</h3>
        <ul>
          <li><strong>麦克风</strong>：录音。</li>
          <li><strong>语音识别</strong>：把录音转成文字。</li>
          <li><strong>本地网络</strong>：连接你所在 Wi-Fi 中的服务器。</li>
          <li><strong>通知</strong>：按你设定的时间发出提醒；通知内容只在你的手机上生成。</li>
        </ul>
        <p>每项权限都可以在 iOS「设置」中随时关闭。</p>

        <h3>我们不做的事</h3>
        <ul>
          <li>不要求注册账号，不收集姓名、邮箱、位置或联系人。</li>
          <li>不接入广告或分析 SDK，不做跨 App 追踪。</li>
          <li>不出售、不出租、不共享你的数据用于营销。</li>
        </ul>

        <h3>保留与删除</h3>
        <ul>
          <li>在 App 内删除任意录音或卡片即永久删除其本地数据。</li>
          <li>卸载 App 会删除设备上的全部数据。</li>
          <li>服务器不长期保存任何录音、文字或卡片内容。</li>
        </ul>

        <h3>儿童</h3>
        <p>本 App 不面向 13 岁以下儿童，也不会有意收集儿童的信息。</p>

        <h3>政策变更</h3>
        <p>本页面是唯一的政策版本，变更会更新顶部的生效日期。</p>

        <h3>联系与支持 / Support</h3>
        <p>
          使用问题、数据删除请求或任何疑问：<a href={`mailto:${CONTACT}`}>{CONTACT}</a>，或在{" "}
          <a href={`${REPO}/issues`} target="_blank" rel="noreferrer">GitHub Issues</a> 提交。本页面同时作为 App 的支持页面。
        </p>

        <hr />

        <h2>English</h2>

        <h3>In one sentence</h3>
        <p>
          Your recordings, transcripts, and cards stay on your phone. Audio passes through a server only for the few seconds it takes to transcribe it, and is deleted immediately afterwards. No accounts, no ads, no tracking, and nothing is ever sold.
        </p>

        <h3>What we process</h3>
        <ul>
          <li><strong>Recordings</strong> — captured only while you hold or tap the record button, stored as audio files on your device.</li>
          <li><strong>Transcripts</strong> — produced by speech recognition and stored on your device; viewable and deletable with the card they belong to.</li>
          <li><strong>Cards</strong> — to-dos, reminders, ideas and your edits to them, stored on your device (Apple's SwiftData local database, protected by device encryption).</li>
        </ul>

        <h3>Where speech recognition happens</h3>
        <ul>
          <li><strong>On device (default)</strong> — Apple's Speech framework. On supported devices recognition runs entirely on the phone and audio never leaves it; where on-device recognition is unavailable, Apple may process audio on its servers under Apple's privacy policy.</li>
          <li><strong>In the cloud (optional)</strong> — when the app is connected to a server configured for cloud recognition, the recording is uploaded to that server and transcribed by Tencent Cloud ASR. The server deletes the audio as soon as transcription finishes, with a 24-hour automatic cleanup as a backstop, and keeps no content after the result is delivered to the phone.</li>
        </ul>

        <h3>Structuring the text</h3>
        <p>
          Sorting a transcript into a to-do, reminder, or idea is done by rules on the phone by default. When the server is configured with Anthropic Claude, the transcript text (never audio) is sent to Claude for structuring; the server keeps nothing after returning the result. Anthropic does not train on API data.
        </p>

        <h3>Server logs</h3>
        <p>
          The server keeps standard access logs (request time, IP address, endpoint) for operations. They contain no recordings or text and are cleared periodically.
        </p>

        <h3>Permissions and why</h3>
        <ul>
          <li><strong>Microphone</strong> — recording.</li>
          <li><strong>Speech recognition</strong> — turning recordings into text.</li>
          <li><strong>Local network</strong> — reaching the server on your Wi-Fi.</li>
          <li><strong>Notifications</strong> — delivering reminders at the time you set; notification content is generated on your phone.</li>
        </ul>
        <p>Each permission can be revoked at any time in iOS Settings.</p>

        <h3>What we don't do</h3>
        <ul>
          <li>No account is required; we do not collect your name, email, location, or contacts.</li>
          <li>No advertising or analytics SDKs, no cross-app tracking.</li>
          <li>We do not sell, rent, or share your data for marketing.</li>
        </ul>

        <h3>Retention and deletion</h3>
        <ul>
          <li>Deleting a recording or card in the app permanently removes its local data.</li>
          <li>Uninstalling the app removes all data on the device.</li>
          <li>The server never stores recordings, transcripts, or cards long-term.</li>
        </ul>

        <h3>Children</h3>
        <p>The app is not directed at children under 13 and does not knowingly collect information from them.</p>

        <h3>Changes</h3>
        <p>This page is the single current version of the policy; changes update the effective date above.</p>

        <h3>Contact and support</h3>
        <p>
          Questions, deletion requests, or support: <a href={`mailto:${CONTACT}`}>{CONTACT}</a>, or open an issue on{" "}
          <a href={`${REPO}/issues`} target="_blank" rel="noreferrer">GitHub</a>. This page also serves as the app's support page.
        </p>
      </div>

      <p className="report-links">
        <a href="/projects/voice-inbox">Project page</a>
        {" · "}
        <a href={REPO} target="_blank" rel="noreferrer">GitHub</a>
      </p>
    </article>
  );
}
