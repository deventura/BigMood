using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using AForge.Video;
using AForge.Video.DirectShow;

namespace Webcam2
{
    public partial class Form1 : Form
    {
        private FilterInfoCollection videoDevices;
        private VideoCaptureDevice VideoSrc;

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            videoDevices = new FilterInfoCollection(FilterCategory.VideoInputDevice);
            foreach (FilterInfo device in videoDevices)
            {
                ComboBox1.Items.Add(device.Name);
            }
            try
            {
                VideoSrc = new VideoCaptureDevice(videoDevices[ComboBox1.SelectedIndex].MonikerString);
            }
            catch(ArgumentOutOfRangeException )
            {
                VideoSrc = new VideoCaptureDevice(videoDevices[0].MonikerString);
            }

            VideoSrc.NewFrame += new NewFrameEventHandler(VideoSrc_NewFrame);
            VideoSrc.Start();

        }
        void VideoSrc_NewFrame(object sender, NewFrameEventArgs eventArgs)
        {
            Bitmap image = (Bitmap)eventArgs.Frame.Clone();
            try
            {
                PictureBox1.Image = image;
            }
            catch(Exception)
            {

            }
        }
        private void Form1_Forceclose(object sender, FormClosingEventArgs e)
        {
            VideoSrc.Stop();
        }


        private void PictureBox1_Click(object sender, EventArgs e)
        {

        }

private void ComboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            VideoSrc.Stop();
            VideoSrc = new VideoCaptureDevice(videoDevices[ComboBox1.SelectedIndex].MonikerString);
            VideoSrc.NewFrame += new NewFrameEventHandler(VideoSrc_NewFrame);
            VideoSrc.Start();
        }
    }
}